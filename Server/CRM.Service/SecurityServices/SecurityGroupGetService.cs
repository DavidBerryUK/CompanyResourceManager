using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Enums;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Security;
using CRM.Service.SecurityServices.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace CRM.Service.SecurityServices
{
    public class SecurityGroupGetService : ISecurityGroupGetService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public SecurityGroupGetService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext
                                  ?? throw new ArgumentNullException(nameof(crmDatabaseContext));
        }

        public async Task<BaseCollectionResponse<SecurityGroupSummary>> GetAllAsync()
        {
            var response = new BaseCollectionResponse<SecurityGroupSummary>();

            var data = await _crmDatabaseContext
                .SecurityGroups
                .OrderBy(o => o.Name)
                .ToListAsync();

            response.Items = Mapper.Map<List<SecurityGroupSummary>>(data);

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetListItemsAsync()
        {
            var response = new BaseCollectionResponse<ListItem>();

            var data = await _crmDatabaseContext
                .SecurityGroups
                .Where(o=> o.IsActive)
                .OrderBy(o=> o.Name)
                .ToListAsync();

            response.Items = Mapper.Map<List<ListItem>>(data);

            return response;
        }

        public async Task<BaseCollectionResponse<SecurityGroupSummary>> GetFilteredAsync(SecurityGroupFilteredListRequest filter)
        {
            //
            // Validate Input Parameters
            //
            if (filter == null)
            {
                throw new ArgumentNullException(nameof(filter));
            }

            var response = new BaseCollectionResponse<SecurityGroupSummary>();

            var query = _crmDatabaseContext
                .SecurityGroups
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

            response.Items = Mapper.Map<List<SecurityGroupSummary>>(data);

            return response;
        }

        public async Task<BaseItemResponse<SecurityGroupExtended>> GetByIdAsync(Guid securityGroupId)
        {
            //
            // Validate Input Parameters
            //
            var response = new BaseItemResponse<SecurityGroupExtended>();

            var data = await _crmDatabaseContext
                .SecurityGroups
                .FirstOrDefaultAsync(o => o.SecurityGroupId == securityGroupId);

            response.Entity = Mapper.Map<SecurityGroupExtended>(data);

            return response;
        }
    }
}
