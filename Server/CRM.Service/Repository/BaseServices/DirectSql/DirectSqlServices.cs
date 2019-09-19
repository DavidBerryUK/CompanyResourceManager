using CRM.Database.Context;
using CRM.Models.Rest.Lists;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Data.Common;
using System.Data.SqlClient;
using System.Threading.Tasks;

namespace CRM.Service.Repository.BaseServices.DirectSql
{
    public class DirectSqlServices<TPrimaryKey> : IDirectSqlServices<TPrimaryKey>
    {
        internal readonly CrmDatabaseContext DbContext;

        public DirectSqlServices(CrmDatabaseContext dbContext)
        {
            DbContext = dbContext;
        }

        public async Task<List<ListItem>> GetListItemsFromSql(TPrimaryKey filterValue, string sql)
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
                    while (await reader.ReadAsync()) data.Add(GetLineItemFromReader(reader));
                }

                DbContext.Database.CloseConnection();
            }

            return data;
        }

        public async Task ExecuteNoResultSql(string sql, TPrimaryKey key1Value, TPrimaryKey key2Value)
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
    }
}