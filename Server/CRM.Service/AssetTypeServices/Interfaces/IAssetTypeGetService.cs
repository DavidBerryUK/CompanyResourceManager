using System;
using System.Threading.Tasks;
using CRM.Models.Rest.AssetType.Requests;
using CRM.Models.Rest.AssetType.Response;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;

namespace CRM.Service.AssetTypeServices.Interfaces
{
    public interface IAssetTypeGetService
    {
        Task<BaseCollectionResponse<AssetType>> GetAllAsync();
        Task<BaseCollectionResponse<AssetType>> GetFilteredAsync(AssetTypeFilteredListRequest filter);
        Task<BaseCollectionResponse<ListItem>> GetListItemsAsync();
        Task<BaseItemResponse<AssetType>> GetByIdAsync(Guid assetTypeId);
    }
}