using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Interfaces;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using CRM.Service.Repository.BaseServices.Interface;
using CRM.Service.Repository.BaseServices.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlClient;
using System.Linq.Expressions;
using System.Threading.Tasks;

namespace CRM.Service.Repository.BaseServices
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

        public async Task<BaseCollectionResponse<ListItem>> GetAll()
        {
            var query = DbContext.Set<TReferenceEntity>();

            var data = await query.ToListAsync();

            var response = new BaseCollectionResponse<ListItem>
            {
                Items = Mapper.Map<List<ListItem>>(data)
            };

            return response;
        }

        public async Task Update(
                Expression<Func<TLinkEntity, TPrimaryKey>> linkTableKey1Property,
                Expression<Func<TLinkEntity, TPrimaryKey>> linkTableKey2Property,
                TPrimaryKey key1Value,
                TPrimaryKey key2Value,
                bool selected)
        {
            var meta = GetMetaData(linkTableKey1Property, linkTableKey2Property);

            var sql = selected ? CreateSqlToInsertListItem(meta) : CreateSqlToDeleteListItem(meta);

            await ExecuteNoResultSql(sql, key1Value, key2Value);
        }

        private static string CreateSqlToDeleteListItem(TableJoinMetaModel meta)
        {
            var sql = "DELETE " +
                      $"FROM    {meta.LinkTableName} " +
                      $"WHERE   {meta.LinkTableName}.{meta.LinkTableJoinKey1PropertyName} = @Key1 " +
                      $"AND		{meta.LinkTableName}.{meta.LinkTableJoinKey2PropertyName} = @Key2";
                      
            return sql;
        }

        private static string CreateSqlToInsertListItem(TableJoinMetaModel meta)
        {
            var sql =
                $"IF NOT EXISTS ( " +
                $" SELECT * FROM {meta.LinkTableName} " +
                $"  WHERE {meta.LinkTableJoinKey1PropertyName} = @Key1 " +
                $"  AND   {meta.LinkTableJoinKey2PropertyName} = @Key2 " +
                $") " +
                $"BEGIN " +
                $"  INSERT INTO {meta.LinkTableName} " +
                $"  ({meta.LinkTableJoinKey1PropertyName}, {meta.LinkTableJoinKey2PropertyName} ) " +
                $"  VALUES ( @Key1, @Key2 ) " +
                $"END ";

            return sql;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetSelectedOnly(
                Expression<Func<TReferenceEntity, TPrimaryKey>> referenceKeyProperty,
                Expression<Func<TLinkEntity, TPrimaryKey>> joinProperty,
                Expression<Func<TReferenceEntity, string>> textProperty,
                Expression<Func<TLinkEntity, TPrimaryKey>> filterProperty,
                TPrimaryKey filterValue
            )
        {
            var meta = GetMetaData(referenceKeyProperty, joinProperty, filterProperty, textProperty);
            var sql = CreateSqlListSelectedOnly(meta);
            var data = await GetListItemsFromSql(filterValue, sql);

            var response = new BaseCollectionResponse<ListItem>
            {
                Items = data
            };

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetUnSelectedOnly(
            Expression<Func<TReferenceEntity, TPrimaryKey>> referenceKeyProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> joinProperty,
            Expression<Func<TReferenceEntity, string>> textProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> filterProperty,
            TPrimaryKey filterValue
        )
        {
            var meta = GetMetaData(referenceKeyProperty, joinProperty, filterProperty, textProperty);
            var sql = CreateSqlListInSelectedOnly(meta);
            var data = await GetListItemsFromSql(filterValue, sql);

            var response = new BaseCollectionResponse<ListItem>
            {
                Items = data
            };

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetAllWithSelection(
            Expression<Func<TReferenceEntity, TPrimaryKey>> referenceKeyProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> joinProperty,
            Expression<Func<TReferenceEntity, string>> textProperty,
            Expression<Func<TLinkEntity, TPrimaryKey>> filterProperty,
            TPrimaryKey filterValue
            )
        {
            var meta = GetMetaData(referenceKeyProperty, joinProperty, filterProperty, textProperty);
            var sql = CreateSqlListWithSelectStatus(meta);
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
                await DbContext.Database.OpenConnectionAsync();
                using (var reader = await command.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        data.Add(GetLineItemFromReader(reader));
                    }
                }

                DbContext.Database.CloseConnection();
            }

            return data;
        }

        private async Task ExecuteNoResultSql(string sql, TPrimaryKey key1Value, TPrimaryKey key2Value)
        {
            using (var command = DbContext.Database.GetDbConnection().CreateCommand())
            {
                await DbContext.Database.OpenConnectionAsync();
                command.CommandText = sql;
                var parameterKey1 = new SqlParameter("@Key1", key1Value);
                var parameterKey2 = new SqlParameter("@Key2", key2Value);
                command.Parameters.Add(parameterKey1);
                command.Parameters.Add(parameterKey2);
                await command.ExecuteNonQueryAsync();

                DbContext.Database.CloseConnection();
            }
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

        private static string CreateSqlListSelectedOnly(TableJoinMetaModel meta)
        {
            var sql = "" +
                      $"SELECT  {meta.ReferenceTableName}.{meta.ReferenceTableKeyPropertyName}	AS [id], " +
                      $"	    {meta.ReferenceTableName}.{meta.ReferenceTableTextPropertyName} AS [name], " +
                      $"		CAST (1 AS BIT) [selected] " +
                      $"FROM	{meta.ReferenceTableName} " +
                      $"LEFT OUTER JOIN	{meta.LinkTableName} " +
                      $"ON		{meta.ReferenceTableName}.{meta.ReferenceTableKeyPropertyName} = {meta.LinkTableName}.{meta.LinkTableJoinPropertyName} " +
                      $"AND		{meta.LinkTableName}.{meta.LinkTableFilterPropertyName} = @FilterValue " +
                      $"WHERE	{meta.ReferenceTableName}.IsActive = 1 " +
                      $"AND	    {meta.LinkTableName}.{meta.LinkTableJoinPropertyName} IS NOT NULL " +
                      $"ORDER BY {meta.ReferenceTableName}.{meta.ReferenceTableTextPropertyName}";
            return sql;
        }

        private static string CreateSqlListInSelectedOnly(TableJoinMetaModel meta)
        {
            var sql = "" +
                      $"SELECT  {meta.ReferenceTableName}.{meta.ReferenceTableKeyPropertyName}	AS [id], " +
                      $"	    {meta.ReferenceTableName}.{meta.ReferenceTableTextPropertyName} AS [name], " +
                      $"		CAST (0 AS BIT) [selected] " +
                      $"FROM	{meta.ReferenceTableName} " +
                      $"LEFT OUTER JOIN	{meta.LinkTableName} " +
                      $"ON		{meta.ReferenceTableName}.{meta.ReferenceTableKeyPropertyName} = {meta.LinkTableName}.{meta.LinkTableJoinPropertyName} " +
                      $"AND		{meta.LinkTableName}.{meta.LinkTableFilterPropertyName} = @FilterValue " +
                      $"WHERE	{meta.ReferenceTableName}.IsActive = 1 " +
                      $"AND	    {meta.LinkTableName}.{meta.LinkTableJoinPropertyName} IS NULL " +
                      $"ORDER BY {meta.ReferenceTableName}.{meta.ReferenceTableTextPropertyName}";
            return sql;
        }

        private static string CreateSqlListWithSelectStatus(TableJoinMetaModel meta)
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
                      $"WHERE	{meta.ReferenceTableName}.IsActive = 1 " +
                      $"ORDER BY {meta.ReferenceTableName}.{meta.ReferenceTableTextPropertyName}";
            return sql;
        }

        private static TableJoinMetaModel GetMetaData(
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

            var metaData = new TableJoinMetaModel
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

        private static TableJoinMetaModel GetMetaData(
            Expression<Func<TLinkEntity, TPrimaryKey>> linkTableKey1Property,
            Expression<Func<TLinkEntity, TPrimaryKey>> linkTableKey2Property)
        {
            if (!(linkTableKey1Property.Body is MemberExpression linkTableKey1FieldMember))
            {
                throw new ArgumentException($"${nameof(linkTableKey1FieldMember)} is not a valid member expression");
            }

            if (!(linkTableKey2Property.Body is MemberExpression linkTableKey2FieldMember))
            {
                throw new ArgumentException($"${nameof(linkTableKey2FieldMember)} is not a valid member expression");
            }

            var metaData = new TableJoinMetaModel
            {
                LinkTableName = typeof(TLinkEntity).Name,
                LinkTableJoinKey1PropertyName = linkTableKey1FieldMember.Member.Name,
                LinkTableJoinKey2PropertyName = linkTableKey2FieldMember.Member.Name,
            };
            return metaData;
        }
    }
}
