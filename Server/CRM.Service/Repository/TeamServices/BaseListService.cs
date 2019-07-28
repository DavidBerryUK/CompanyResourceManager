using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;
using CRM.Database.Context;
using CRM.Models.Database.Interfaces;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.TeamServices.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CRM.Service.Repository.TeamServices
{
    public class BaseListService<TReferenceEntity, TLinkEntity, TPrimaryKey> 
        : IBaseListService<TReferenceEntity, TLinkEntity, TPrimaryKey> 
        where TReferenceEntity : class, IDatabaseEntity<TPrimaryKey>
        where TLinkEntity : class, IDatabaseLinkEntity<TPrimaryKey>
    {
        internal readonly CrmDatabaseContext DbContext;

        protected BaseListService(CrmDatabaseContext dbContext)
        {
            DbContext = dbContext;
        }


        public async Task<BaseCollectionResponse<ListItem>> GetAllWithSelection(
            Expression<Func<TReferenceEntity, TPrimaryKey>> referenceKeyProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> joinProperty,
            Expression<Func<TReferenceEntity, string>> textProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> filterProperty,
            TPrimaryKey filterValue
            )
        {
            var meta = CreateSqlForListItems(referenceKeyProperty, joinProperty, filterProperty, textProperty);
            var sql = CreateSqlReferenceOuterJoin(meta);
            var data = await GetListItemsFromSql(filterValue, sql);

            var response = new BaseCollectionResponse<ListItem>
            {
                Items = data
            };

            return response;
        }

        private async Task<List<ListItem>> GetListItemsFromSql(TPrimaryKey filterValue, string sql)
        {
            var data = new List<ListItem>();
            using (var command = DbContext.Database.GetDbConnection().CreateCommand())
            {
                var parameterFilter = new SqlParameter("@FilterValue", filterValue);
                command.CommandText = sql;
                command.Parameters.Add(parameterFilter);
                DbContext.Database.OpenConnection();
                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        data.Add(GetLineItemFromReader(reader));
                    }
                }
            }

            return data;
        }

        private static ListItem GetLineItemFromReader(DbDataReader reader)
        {
            var item = new ListItem
            {
                Id = reader.GetFieldValue<TPrimaryKey>(0).ToString(),
                Name = reader.GetString(1),
                Selected = reader.GetBoolean(2)
            };




            return item;
        }

        private static string CreateSqlReferenceOuterJoin(TableJoinMetaData meta)
        {
            var sql = "" +
                      $"SELECT  {meta.ReferenceTableName}.{meta.ReferenceTableKeyPropertyName}	AS [id], " +
                      $"	    {meta.ReferenceTableName}.{meta.ReferenceTableTextPropertyName} AS [name], " +
                      $"		CASE " +
                      $"			WHEN {meta.LinkTableName}.{meta.LinkTableJoinPropertyName} IS NULL THEN CAST(0 as BIT) " +
                      $"			ELSE CAST(1 as BIT) " +
                      $"		END AS  [selected] " +
                      $"FROM	{meta.ReferenceTableName} " +
                      $"LEFT OUTER JOIN	{meta.LinkTableName} " +
                      $"ON		{meta.ReferenceTableName}.{meta.ReferenceTableKeyPropertyName} = {meta.LinkTableName}.{meta.LinkTableJoinPropertyName} " +
                      $"AND		{meta.LinkTableName}.{meta.LinkTableFilterPropertyName} = @FilterValue " +
                      $"WHERE	{meta.ReferenceTableName}.IsActive = 1 ";
            return sql;
        }

        private static TableJoinMetaData CreateSqlForListItems(
            Expression<Func<TReferenceEntity, TPrimaryKey>> referenceKeyProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> joinProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> filterProperty,
            Expression<Func<TReferenceEntity, string>> textProperty)
        {
            if (!(referenceKeyProperty.Body is MemberExpression referenceKeyFieldMember))
            {
                throw new ArgumentException($"${nameof(referenceKeyProperty)} is not a valid member expression");
            }

            if (!(joinProperty.Body is MemberExpression joinFieldMember))
            {
                throw new ArgumentException($"${nameof(joinProperty)} is not a valid member expression");
            }

            if (!(filterProperty.Body is MemberExpression filterFieldMember))
            {
                throw new ArgumentException($"${nameof(filterProperty)} is not a valid member expression");
            }

            if (!(textProperty.Body is MemberExpression textFieldMember))
            {
                throw new ArgumentException($"${nameof(textProperty)} is not a valid member expression");
            }

            var metaData = new TableJoinMetaData
            {
                ReferenceTableName = typeof(TReferenceEntity).Name,
                LinkTableName = typeof(TLinkEntity).Name,
                ReferenceTableKeyPropertyName = referenceKeyFieldMember.Member.Name,
                LinkTableJoinPropertyName = joinFieldMember.Member.Name,
                LinkTableFilterPropertyName = filterFieldMember.Member.Name,
                ReferenceTableTextPropertyName = textFieldMember.Member.Name
            };
            return metaData;
        }
    }
}
