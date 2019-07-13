using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.BaseResponse;
using CRM.Service.JobRoleServices.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;
using CRM.Models.Rest.JobRole;

namespace CRM.Service.JobRoleServices
{
    public class JobRoleUpdateService : IJobRoleUpdateService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public JobRoleUpdateService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext;
        }

        public async Task<BaseItemResponse<JobRoleExtended>> Create(JobRoleExtended jobRole)
        {
            var response = new BaseItemResponse<JobRoleExtended>();

            var entity = Mapper.Map<Models.Database.JobRole>(jobRole);
            entity.JobRoleId = Guid.NewGuid();
            entity.IsActive = true;

            await _crmDatabaseContext.AddAsync(entity);
            await _crmDatabaseContext.SaveChangesAsync();

            response.Entity = Mapper.Map<JobRoleExtended>(entity);

            return response;
        }

        public async Task<BaseItemResponse<JobRoleExtended>> Update(Guid jobRoleId, JobRoleExtended jobRole)
        {
            var response = new BaseItemResponse<JobRoleExtended>();
            var data = await _crmDatabaseContext.JobRoles.FirstOrDefaultAsync(o => o.JobRoleId == jobRoleId);

            if (data == null)
            {
                response.ErrorMessage = $"Job Role Id {jobRoleId} not found";
            }
            else
            {
                Mapper.Map(jobRole, data);
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<JobRoleExtended>(data);
            }

            return response;
        }

        public async Task<BaseItemResponse<JobRoleSummary>> Activate(Guid jobRoleId)
        {
            return await AmendActiveStatus(jobRoleId, true);
        }

        public async Task<BaseItemResponse<JobRoleSummary>> Deactivate(Guid jobRoleId)
        {
            return await AmendActiveStatus(jobRoleId, false);
        }

        private async Task<BaseItemResponse<JobRoleSummary>> AmendActiveStatus(Guid jobRoleId, bool isActive)
        {
            var response = new BaseItemResponse<JobRoleSummary>();
            var data = await _crmDatabaseContext.JobRoles.FirstOrDefaultAsync(o => o.JobRoleId == jobRoleId);

            if (data == null)
            {
                response.ErrorMessage = $"Job Role Id {jobRoleId} not found";
            }
            else
            {
                data.IsActive = isActive;
                await _crmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<JobRoleSummary>(data);
            }

            return response;
        }
    }
}
