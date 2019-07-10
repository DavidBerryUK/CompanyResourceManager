﻿using System;
using System.Threading.Tasks;
using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.AssetType.Response;
using CRM.Models.Rest.BaseResponse;
using CRM.Service.AssetTypeServices.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CRM.Service.AssetTypeServices
{
    public class AssetTypeUpdateService : IAssetTypeUpdateService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public AssetTypeUpdateService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext;
        }

        public async Task<BaseItemResponse<AssetType>> Create(AssetType assetType)
        {
            var response = new BaseItemResponse<AssetType>();

            var entity = Mapper.Map<Models.Database.AssetType>(assetType);
            entity.AssetTypeId = Guid.NewGuid();
            entity.IsActive = true;

            await _crmDatabaseContext.AddAsync(entity);
            await _crmDatabaseContext.SaveChangesAsync();

            response.Entity = Mapper.Map<AssetType>(entity);

            return response;
        }

        public async Task<BaseItemResponse<AssetType>> Update(Guid assetTypeId, AssetType assetType)
        {
            var response = new BaseItemResponse<AssetType>();
            var data = await _crmDatabaseContext.AssetTypes.FirstOrDefaultAsync(o => o.AssetTypeId == assetTypeId);

            if (data == null)
            {
                response.ErrorMessage = $"Asset Type Id {assetTypeId} not found";
            }
            else
            {
                Mapper.Map(assetType, data);
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<AssetType>(data);
            }

            return response;
        }

        public async Task<BaseItemResponse<AssetType>> Activate(Guid assetTypeId)
        {
            return await AmendActiveStatus(assetTypeId, true);
        }

        public async Task<BaseItemResponse<AssetType>> Deactivate(Guid assetTypeId)
        {
            return await AmendActiveStatus(assetTypeId, false);
        }

        private async Task<BaseItemResponse<AssetType>> AmendActiveStatus(Guid assetTypeId, bool isActive)
        {
            var response = new BaseItemResponse<AssetType>();
            var data = await _crmDatabaseContext.AssetTypes.FirstOrDefaultAsync(o => o.AssetTypeId == assetTypeId);

            if (data == null)
            {
                response.ErrorMessage = $"Asset Type Id {assetTypeId} not found";
            }
            else
            {
                data.IsActive = isActive;
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<AssetType>(data);
            }

            return response;
        }
    }
}
