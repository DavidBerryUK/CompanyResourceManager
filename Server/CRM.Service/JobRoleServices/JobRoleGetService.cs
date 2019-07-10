using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Enums;
using CRM.Models.Rest.JobRole.Requests;
using CRM.Models.Rest.JobRole.Response;
using CRM.Models.Rest.Lists;
using CRM.Service.JobRoleServices.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CRM.Service.JobRoleServices
{
    public class JobRoleGetService : IJobRoleGetService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public JobRoleGetService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext;
        }

        public async Task<BaseCollectionResponse<JobRole>> GetAllAsync()
        {
            var response = new BaseCollectionResponse<JobRole>();

            var data = await _crmDatabaseContext
                .JobRoles
                .OrderBy(o => o.Name)
                .ToListAsync();

            response.Items = Mapper.Map<List<JobRole>>(data);

            return response;
        }

        public async Task<BaseCollectionResponse<ListItem>> GetListItemsAsync()
        {
            var response = new BaseCollectionResponse<ListItem>();

            var data = await _crmDatabaseContext
                .JobRoles
                .Where(o=> o.IsActive)
                .OrderBy(o=> o.Name)
                .ToListAsync();

            response.Items = Mapper.Map<List<ListItem>>(data);

            return response;
        }

        public async Task<BaseCollectionResponse<JobRole>> GetFilteredAsync(JobRoleFilteredListRequest filter)
        {
            var response = new BaseCollectionResponse<JobRole>();

            var query = _crmDatabaseContext
                .JobRoles
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

            response.Items = Mapper.Map<List<JobRole>>(data);

            return response;
        }

        public async Task<BaseItemResponse<JobRole>> GetByIdAsync(Guid jobRoleId)
        {
            var response = new BaseItemResponse<JobRole>();

            var data = await _crmDatabaseContext
                .JobRoles
                .FirstOrDefaultAsync(o => o.JobRoleId== jobRoleId);

            response.Entity = Mapper.Map<JobRole>(data);

            return response;
        }
    }
}
