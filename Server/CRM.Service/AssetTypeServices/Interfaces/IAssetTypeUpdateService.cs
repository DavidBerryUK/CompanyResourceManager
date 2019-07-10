using System;
using System.Threading.Tasks;
using CRM.Models.Rest.AssetType.Response;
using CRM.Models.Rest.BaseResponse;

namespace CRM.Service.AssetTypeServices.Interfaces
{
    public interface IAssetTypeUpdateService
    {
        Task<BaseItemResponse<AssetType>> Create(AssetType assetType);
        Task<BaseItemResponse<AssetType>> Update(Guid assetTypeId, AssetType assetType);
        Task<BaseItemResponse<AssetType>> Activate(Guid assetTypeId);
        Task<BaseItemResponse<AssetType>> Deactivate(Guid assetTypeId);
    }
}