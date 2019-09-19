using System.Collections.Generic;
using System.Threading.Tasks;
using CRM.Models.Rest.Lists;

namespace CRM.Service.Repository.BaseServices.DirectSql
{
    public interface IDirectSqlServices<in TPrimaryKey>
    {
        Task<List<ListItem>> GetListItemsFromSql(TPrimaryKey filterValue, string sql);
        Task ExecuteNoResultSql(string sql, TPrimaryKey key1Value, TPrimaryKey key2Value);
    }
}