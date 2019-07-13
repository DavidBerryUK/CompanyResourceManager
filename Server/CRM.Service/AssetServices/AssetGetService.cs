using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Enums;
using CRM.Service.AssetServices.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using CRM.Models.Rest.Asset;

namespace CRM.Service.AssetServices
{
    public class AssetGetService : IAssetGetService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public AssetGetService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext;
        }

        public async Task<BaseCollectionResponse<AssetSummary>> GetAllAsync()
        {
            var response = new BaseCollectionResponse<AssetSummary>();

            var data = await _crmDatabaseContext
                .Assets
                .Include(o=> o.NavAssetType)
                .ToListAsync();

            response.Items = Mapper.Map<List<AssetSummary>>(data);

            return response;
        }

        public async Task<BaseCollectionResponse<AssetSummary>> GetFilteredAsync(AssetFilteredListRequest filter)
        {
            var response = new BaseCollectionResponse<AssetSummary>();
            var query =  _crmDatabaseContext
                .Assets
                .Include(o => o.NavAssetType)
                .AsQueryable();

            switch (filter.RecordActiveStatusFilter)
            {
                case EnumRecordActiveStatus.Active:
                    query = query.Where(o => o.IsActive).AsQueryable();
                    break;

                case EnumRecordActiveStatus.InActive:
                    query = query.Where(o => o.IsActive == false).AsQueryable();
                    break;
            }

            query = query
                .OrderBy(order => order.Name);

            var data = await query.ToListAsync();

            response.Items = Mapper.Map<List<AssetSummary>>(data);

            return response;
        }

        public async Task<BaseItemResponse<AssetExtended>> GetByIdAsync(Guid assetId)
        {
            {
                var response = new BaseItemResponse<AssetExtended>();

                var data = await _crmDatabaseContext
                    .Assets
                    .Include(o => o.NavAssetType)
                    .FirstOrDefaultAsync(o => o.AssetId == assetId);

                response.Entity = Mapper.Map<AssetExtended>(data);

                return response;
            }
        }
    }
}
