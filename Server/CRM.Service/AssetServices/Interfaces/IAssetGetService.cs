using CRM.Models.Rest.Asset;
using CRM.Models.Rest.BaseResponse;
using System;
using System.Threading.Tasks;

namespace CRM.Service.AssetServices.Interfaces
{
    public interface IAssetGetService
    {
        Task<BaseCollectionResponse<AssetSummary>> GetAllAsync();

        Task<BaseCollectionResponse<AssetSummary>> GetFilteredAsync(AssetFilteredListRequest filter);

        Task<BaseItemResponse<AssetExtended>> GetByIdAsync(Guid assetId);

    }
}
