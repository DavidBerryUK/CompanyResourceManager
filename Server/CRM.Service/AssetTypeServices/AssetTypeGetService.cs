using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.AssetType;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Enums;
using CRM.Models.Rest.Lists;
using CRM.Service.AssetTypeServices.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM.Service.AssetTypeServices
{
    public class AssetTypeGetService : IAssetTypeGetService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public AssetTypeGetService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext
                                  ?? throw new ArgumentNullException(nameof(crmDatabaseContext));
        }

        public async Task<BaseCollectionResponse<AssetTypeSummary>> GetAllAsync()
        {
            var response = new BaseCollectionResponse<AssetTypeSummary>();

            var data = await _crmDatabaseContext
                .AssetTypes
                .OrderBy(o => o.Name)
                .ToListAsync();

            response.Items = Mapper.Map<List<AssetTypeSummary>>(data);

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetListItemsAsync()
        {
            var response = new BaseCollectionResponse<ListItem>();

            var data = await _crmDatabaseContext
                .AssetTypes
                .Where(o=> o.IsActive)
                .OrderBy(o=> o.Name)
                .ToListAsync();

            response.Items = Mapper.Map<List<ListItem>>(data);

            return response;
        }

        public async Task<BaseCollectionResponse<AssetTypeSummary>> GetFilteredAsync(AssetTypeFilteredListRequest filter)
        {
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var response = new BaseCollectionResponse<AssetTypeSummary>();

            var query = _crmDatabaseContext
                .AssetTypes
                .AsQueryable();

            switch (filter.RecordActiveStatusFilter)
            {
                case EnumRecordActiveStatus.Active:
                    query = query.Where(o => o.IsActive).AsQueryable();
                    break;

                case EnumRecordActiveStatus.InActive:
                    query = query.Where(o => o.IsActive == false).AsQueryable();
                    break;

                case EnumRecordActiveStatus.All:
                    break;

                default:
                    throw new ArgumentOutOfRangeException();
            }

            query = query
                .OrderBy(order => order.Name);

            var data = await query.ToListAsync();

            response.Items = Mapper.Map<List<AssetTypeSummary>>(data);

            return response;
        }

        public async Task<BaseItemResponse<AssetTypeExtended>> GetByIdAsync(Guid assetTypeId)
        {
            //
            // Validate Input Parameters
            //
            if (assetTypeId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(assetTypeId)} can not be blank");
            }

            var response = new BaseItemResponse<AssetTypeExtended>();

            var data = await _crmDatabaseContext
                .AssetTypes
                .FirstOrDefaultAsync(o => o.AssetTypeId == assetTypeId);

            response.Entity = Mapper.Map<AssetTypeExtended>(data);

            return response;
        }
    }
}
