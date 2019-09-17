using CRM.Models.Database.Interfaces;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Generic;
using CRM.Models.Rest.Lists;
using System.Linq;
using System.Threading.Tasks;

namespace CRM.Service.Repository.BaseServices.Interface
{
    public interface IBaseCrudService<TEntity, TRestModel,  TPrimaryKey> 
        where TEntity : class, IDatabaseEntityPrimaryKey<TPrimaryKey> 
        where TRestModel : class, new()
    {
        /// <summary>
        /// Get a list of all entities
        /// </summary>
        /// <returns></returns>
        Task<BaseCollectionResponse<TRestModel>> GetAllAsync();

        Task<BaseCollectionResponse<TRestModel>> GetFilteredAsync(FilteredArchiveRequest filter);

        Task<BaseItemResponse<TRestModel>> GetItemAsync(TPrimaryKey id);

        Task<BaseItemResponse<TRestModel>> UpdateActiveStatusAsync(TPrimaryKey id, bool isActive);

        Task<BaseItemResponse<TRestModel>> UpdateAsync(TPrimaryKey id, TRestModel model);

        Task<BaseItemResponse<TRestModel>> CreateAsync(TRestModel model);

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