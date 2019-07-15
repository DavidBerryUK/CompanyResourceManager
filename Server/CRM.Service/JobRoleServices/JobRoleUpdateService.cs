using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.JobRole;
using CRM.Service.JobRoleServices.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace CRM.Service.JobRoleServices
{
    public class JobRoleUpdateService : IJobRoleUpdateService
    {
        private readonly CrmDatabaseContext _crmDatabaseContext;

        public JobRoleUpdateService(CrmDatabaseContext crmDatabaseContext)
        {
            _crmDatabaseContext = crmDatabaseContext
                                  ?? throw new ArgumentNullException(nameof(crmDatabaseContext));
        }

        public async Task<BaseItemResponse<JobRoleExtended>> Create(JobRoleExtended jobRole)
        {
            //
            // Validate Input Parameters
            //
            if (jobRole == null)
            {
                throw new ArgumentNullException(nameof(jobRole));
            }

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
            //
            // Validate Input Parameters
            //
            if (jobRoleId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(jobRoleId)} can not be blank");
            }

            if (jobRole == null)
            {
                throw new ArgumentNullException(nameof(jobRole));
            }

            var response = new BaseItemResponse<JobRoleExtended>();
            var data = await _crmDatabaseContext.JobRoles.FirstOrDefaultAsync(o => o.JobRoleId == jobRoleId);

            if (data == null)
            {
                response.ErrorMessage = $"{nameof(jobRoleId)} {jobRoleId} not found";
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
            //
            // Validate Input Parameters
            //
            if (jobRoleId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(jobRoleId)} can not be blank");
            }

            return await AmendActiveStatus(jobRoleId, true);
        }

        public async Task<BaseItemResponse<JobRoleSummary>> Deactivate(Guid jobRoleId)
        {
            //
            // Validate Input Parameters
            //
            if (jobRoleId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(jobRoleId)} can not be blank");
            }

            return await AmendActiveStatus(jobRoleId, false);
        }

        private async Task<BaseItemResponse<JobRoleSummary>> AmendActiveStatus(Guid jobRoleId, bool isActive)
        {
            //
            // Validate Input Parameters
            //
            if (jobRoleId == Guid.Empty)
            {
                throw new ArgumentException($"{nameof(jobRoleId)} can not be blank");
            }

            var response = new BaseItemResponse<JobRoleSummary>();
            var data = await _crmDatabaseContext.JobRoles.FirstOrDefaultAsync(o => o.JobRoleId == jobRoleId);

            if (data == null)
            {
                response.ErrorMessage = $"{nameof(jobRoleId)} {jobRoleId} not found";
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
