using CRM.Models.Rest.AssetType.Response;
using CRM.Models.Rest.BaseResponse;
using System;
using System.Threading.Tasks;

namespace CRM.Service.AssetTypeServices.Interfaces
{
    public interface IAssetTypeUpdateService
    {
        Task<BaseItemResponse<AssetTypeExtended>> Create(AssetTypeExtended assetTypeSummary);
        Task<BaseItemResponse<AssetTypeExtended>> Update(Guid assetTypeId, AssetTypeExtended assetTypeSummary);
        Task<BaseItemResponse<AssetTypeSummary>> Activate(Guid assetTypeId);
        Task<BaseItemResponse<AssetTypeSummary>> Deactivate(Guid assetTypeId);
    }
}