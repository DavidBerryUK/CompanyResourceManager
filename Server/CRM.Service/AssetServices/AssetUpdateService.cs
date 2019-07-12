using System;
using System.Threading.Tasks;
using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.Asset.Response;
using CRM.Models.Rest.BaseResponse;
using CRM.Service.AssetServices.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CRM.Service.AssetServices
{
    public class AssetUpdateService : IAssetUpdateService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public AssetUpdateService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext;
        }

        public async Task<BaseItemResponse<AssetExtended>> Create(AssetExtended asset)
        {
            var response = new BaseItemResponse<AssetExtended>();

            var entity = Mapper.Map<Models.Database.Asset>(asset);
            entity.AssetId = Guid.NewGuid();
            entity.IsActive = true;

            await _crmDatabaseContext.AddAsync(entity);
            await _crmDatabaseContext.SaveChangesAsync();

            response.Entity = Mapper.Map<AssetExtended>(entity);

            return response;
        }

        public async Task<BaseItemResponse<AssetExtended>> Update(Guid assetId, AssetExtended asset)
        {
            var response = new BaseItemResponse<AssetExtended>();
            var data = await _crmDatabaseContext.Assets.FirstOrDefaultAsync(o => o.AssetId == assetId);

            if (data == null)
            {
                response.ErrorMessage = $"Asset Id {assetId} not found";
            }
            else
            {
                Mapper.Map(asset, data);
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<AssetExtended>(data);
            }

            return response;
        }

        public async Task<BaseItemResponse<AssetSummary>> Activate(Guid assetId)
        {
            return await AmendActiveStatus(assetId, true);
        }

        public async Task<BaseItemResponse<AssetSummary>> Deactivate(Guid assetId)
        {
            return await AmendActiveStatus(assetId, false);
        }

        private async Task<BaseItemResponse<AssetSummary>> AmendActiveStatus(Guid assetId, bool isActive)
        {
            var response = new BaseItemResponse<AssetSummary>();
            var data = await _crmDatabaseContext.Assets.FirstOrDefaultAsync(o => o.AssetId == assetId);

            if (data == null)
            {
                response.ErrorMessage = $"AssetSummary Id {assetId} not found";
            }
            else
            {
                data.IsActive = isActive;
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<AssetSummary>(data);
            }

            return response;
        }
    }
}
