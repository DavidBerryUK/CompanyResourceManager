using CRM.Models.Rest.AssetType.Requests;
using CRM.Models.Rest.AssetType.Response;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using System;
using System.Threading.Tasks;

namespace CRM.Service.AssetTypeServices.Interfaces
{
    public interface IAssetTypeGetService
    {
        Task<BaseCollectionResponse<AssetTypeSummary>> GetAllAsync();
        Task<BaseCollectionResponse<AssetTypeSummary>> GetFilteredAsync(AssetTypeFilteredListRequest filter);
        Task<BaseCollectionResponse<ListItem>> GetListItemsAsync();
        Task<BaseItemResponse<AssetTypeExtended>> GetByIdAsync(Guid assetTypeId);
    }
}