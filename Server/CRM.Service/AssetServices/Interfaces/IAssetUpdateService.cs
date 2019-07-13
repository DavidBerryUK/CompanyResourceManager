using CRM.Models.Rest.BaseResponse;
using System;
using System.Threading.Tasks;
using CRM.Models.Rest.Asset;

namespace CRM.Service.AssetServices.Interfaces
{
    public interface IAssetUpdateService
    {
        Task<BaseItemResponse<AssetExtended>> Create(AssetExtended asset);
        Task<BaseItemResponse<AssetExtended>> Update(Guid assetId, AssetExtended asset);
        Task<BaseItemResponse<AssetSummary>> Activate(Guid assetId);
        Task<BaseItemResponse<AssetSummary>> Deactivate(Guid assetId);
    }
}