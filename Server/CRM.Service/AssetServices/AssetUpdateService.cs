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
        private readonly PsmDatabaseContext _psmDatabaseContext;

        public AssetUpdateService(PsmDatabaseContext psmDatabaseContext)
        {
            _psmDatabaseContext = psmDatabaseContext;
        }

        public async Task<BaseItemResponse<Asset>> Create(Asset asset)
        {
            var response = new BaseItemResponse<Asset>();

            var entity = Mapper.Map<Models.Database.Asset>(asset);
            entity.AssetId = Guid.NewGuid();
            entity.IsActive = true;

            await _psmDatabaseContext.AddAsync(entity);
            await _psmDatabaseContext.SaveChangesAsync();

            response.Entity = Mapper.Map<Asset>(entity);

            return response;
        }

        public async Task<BaseItemResponse<Asset>> Update(Guid assetId, Asset asset)
        {
            var response = new BaseItemResponse<Asset>();
            var data = await _psmDatabaseContext.Assets.FirstOrDefaultAsync(o => o.AssetId == assetId);

            if (data == null)
            {
                response.ErrorMessage = $"Asset Id {assetId} not found";
            }
            else
            {
                Mapper.Map(asset, data);
                await _psmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<Asset>(data);
            }

            return response;
        }

        public async Task<BaseItemResponse<Asset>> Activate(Guid assetId)
        {
            return await AmendActiveStatus(assetId, true);
        }

        public async Task<BaseItemResponse<Asset>> Deactivate(Guid assetId)
        {
            return await AmendActiveStatus(assetId, false);
        }

        private async Task<BaseItemResponse<Asset>> AmendActiveStatus(Guid assetId, bool isActive)
        {
            var response = new BaseItemResponse<Asset>();
            var data = await _psmDatabaseContext.Assets.FirstOrDefaultAsync(o => o.AssetId == assetId);

            if (data == null)
            {
                response.ErrorMessage = $"Asset Id {assetId} not found";
            }
            else
            {
                data.IsActive = isActive;
                await _psmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<Asset>(data);
            }

            return response;
        }
    }
}
