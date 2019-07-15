using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.AssetType;
using CRM.Models.Rest.BaseResponse;
using CRM.Service.AssetTypeServices.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace CRM.Service.AssetTypeServices
{
    public class AssetTypeUpdateService : IAssetTypeUpdateService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public AssetTypeUpdateService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext
                                  ?? throw new ArgumentNullException(nameof(crmDatabaseContext));
        }

        public async Task<BaseItemResponse<AssetTypeExtended>> Create(AssetTypeExtended assetType)
        {
            //
            // Validate Input Parameters
            //
            if (assetType == null)
            {
                throw new ArgumentNullException(nameof(assetType));
            }

            var response = new BaseItemResponse<AssetTypeExtended>();

            var entity = Mapper.Map<Models.Database.AssetType>(assetType);
            entity.AssetTypeId = Guid.NewGuid();
            entity.IsActive = true;

            await _crmDatabaseContext.AddAsync(entity);
            await _crmDatabaseContext.SaveChangesAsync();

            response.Entity = Mapper.Map<AssetTypeExtended>(entity);

            return response;
        }

        public async Task<BaseItemResponse<AssetTypeExtended>> Update(Guid assetTypeId, AssetTypeExtended assetType)
        {
            //
            // Validate Input Parameters
            //
            if (assetTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(assetTypeId)} can not be blank");
            }

            if (assetType == null)
            {
                throw new ArgumentNullException(nameof(assetType));
            }

            var response = new BaseItemResponse<AssetTypeExtended>();
            var data = await _crmDatabaseContext.AssetTypes.FirstOrDefaultAsync(o => o.AssetTypeId == assetTypeId);

            if (data == null)
            {
                response.ErrorMessage = $"{nameof(assetTypeId)} {assetTypeId} not found";
            }
            else
            {
                Mapper.Map(assetType, data);
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<AssetTypeExtended>(data);
            }

            return response;
        }

        public async Task<BaseItemResponse<AssetTypeSummary>> Activate(Guid assetTypeId)
        {
            //
            // Validate Input Parameters
            //
            if (assetTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(assetTypeId)} can not be blank");
            }

            return await AmendActiveStatus(assetTypeId, true);
        }

        public async Task<BaseItemResponse<AssetTypeSummary>> Deactivate(Guid assetTypeId)
        {
            //
            // Validate Input Parameters
            //
            if (assetTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(assetTypeId)} can not be blank");
            }

            return await AmendActiveStatus(assetTypeId, false);
        }

        private async Task<BaseItemResponse<AssetTypeSummary>> AmendActiveStatus(Guid assetTypeId, bool isActive)
        {
            //
            // Validate Input Parameters
            //
            if (assetTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(assetTypeId)} can not be blank");
            }

            var response = new BaseItemResponse<AssetTypeSummary>();
            var data = await _crmDatabaseContext.AssetTypes.FirstOrDefaultAsync(o => o.AssetTypeId == assetTypeId);

            if (data == null)
            {
                response.ErrorMessage = $"{nameof(assetTypeId)} {assetTypeId} not found";
            }
            else
            {
                data.IsActive = isActive;
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<AssetTypeSummary>(data);
            }

            return response;
        }
    }
}
