using CRM.Models.Database.Interfaces;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Generic;
using CRM.Models.Rest.Lists;
using System.Linq;
using System.Threading.Tasks;

namespace CRM.Service.Repository.BaseServices.Interface
{
    public interface IBaseCrudService<TEntity, TSummary, TExtended,  TPrimaryKey> 
        where TEntity : class, IDatabaseEntity<TPrimaryKey> 
        where TSummary : class, new() 
        where TExtended : class, new()
    {
        /// <summary>
        /// Get a list of all entities
        /// </summary>
        /// <returns></returns>
        Task<BaseCollectionResponse<TSummary>> GetAllAsSummaryAsync();

        Task<BaseCollectionResponse<TExtended>> GetAllAsExtendedAsync();

        Task<BaseCollectionResponse<TSummary>> GetFilteredAsSummaryAsync(FilteredArchiveRequest filter);

        Task<BaseCollectionResponse<TExtended>> GetFilteredAsExtendedAsync(FilteredArchiveRequest filter);

        Task<BaseItemResponse<TSummary>> GetItemAsSummaryAsync(TPrimaryKey id);

        Task<BaseItemResponse<TExtended>> GetItemAsExtendedAsync(TPrimaryKey id);

        Task<BaseItemResponse<TSummary>> UpdateActiveStatusAsync(TPrimaryKey id, bool isActive);

        Task<BaseItemResponse<TExtended>> UpdateAsync(TPrimaryKey id, TExtended model);

        Task<BaseItemResponse<TExtended>> CreateAsync(TExtended model);

        Task<BaseCollectionResponse<ListItem>> GetActiveAsListItemsAsync();

        TPrimaryKey CreateNewPrimaryKey();


        /// <summary>
        /// Define the order of summary fetch
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        IQueryable<TEntity> QueryOrder(IQueryable<TEntity> query);

        /// <summary>
        /// Define additional records to read for the summary view
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        IQueryable<TEntity> QuerySummaryInclude(IQueryable<TEntity> query);

        /// <summary>
        /// Define additional records to read for the extended view
        /// </summary>
        /// <param name="query"></param>
        /// <returns></returns>
        IQueryable<TEntity> QueryExtendedInclude(IQueryable<TEntity> query);

    }
}