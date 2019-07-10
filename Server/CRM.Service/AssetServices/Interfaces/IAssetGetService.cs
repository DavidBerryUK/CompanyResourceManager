using System;
using System.Threading.Tasks;
using CRM.Models.Rest.Asset.Requests;
using CRM.Models.Rest.Asset.Response;
using CRM.Models.Rest.BaseResponse;

namespace CRM.Service.AssetServices.Interfaces
{
    public interface IAssetGetService
    {
        Task<BaseCollectionResponse<AssetSummary>> GetAllAsync();

        Task<BaseCollectionResponse<AssetSummary>> GetFilteredAsync(AssetFilteredListRequest filter);

        Task<BaseItemResponse<AssetSummary>> GetByIdAsync(Guid assetId);

    }
}
