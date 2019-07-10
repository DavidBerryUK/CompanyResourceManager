using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.AssetType.Requests;
using CRM.Models.Rest.AssetType.Response;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Enums;
using CRM.Models.Rest.Lists;
using CRM.Service.AssetTypeServices.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CRM.Service.AssetTypeServices
{
    public class AssetTypeGetService : IAssetTypeGetService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public AssetTypeGetService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext;
        }

        public async Task<BaseCollectionResponse<AssetType>> GetAllAsync()
        {
            var response = new BaseCollectionResponse<AssetType>();

            var data = await _crmDatabaseContext
                .AssetTypes
                .OrderBy(o => o.Name)
                .ToListAsync();

            response.Items = Mapper.Map<List<AssetType>>(data);

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

        public async Task<BaseCollectionResponse<AssetType>> GetFilteredAsync(AssetTypeFilteredListRequest filter)
        {
            var response = new BaseCollectionResponse<AssetType>();

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
            }

            query = query
                .OrderBy(order => order.Name);

            var data = await query.ToListAsync();

            response.Items = Mapper.Map<List<AssetType>>(data);

            return response;
        }

        public async Task<BaseItemResponse<AssetType>> GetByIdAsync(Guid assetTypeId)
        {
            var response = new BaseItemResponse<AssetType>();

            var data = await _crmDatabaseContext
                .AssetTypes
                .FirstOrDefaultAsync(o => o.AssetTypeId == assetTypeId);

            response.Entity = Mapper.Map<AssetType>(data);

            return response;
        }
    }
}
