using System;
using System.Threading.Tasks;
using CRM.Models.Rest.Asset.Response;
using CRM.Models.Rest.BaseResponse;

namespace CRM.Service.AssetServices.Interfaces
{
    public interface IAssetUpdateService
    {
        Task<BaseItemResponse<Asset>> Create(Asset asset);
        Task<BaseItemResponse<Asset>> Update(Guid assetId, Asset asset);
        Task<BaseItemResponse<Asset>> Activate(Guid assetId);
        Task<BaseItemResponse<Asset>> Deactivate(Guid assetId);
    }
}