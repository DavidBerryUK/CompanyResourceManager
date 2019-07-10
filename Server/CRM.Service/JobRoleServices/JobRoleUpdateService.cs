﻿using System;
using System.Threading.Tasks;
using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.JobRole.Response;
using CRM.Service.JobRoleServices.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CRM.Service.JobRoleServices
{
    public class JobRoleUpdateService : IJobRoleUpdateService
    {
        private readonly PsmDatabaseContext _psmDatabaseContext;

        public JobRoleUpdateService(PsmDatabaseContext psmDatabaseContext)
        {
            _psmDatabaseContext = psmDatabaseContext;
        }

        public async Task<BaseItemResponse<JobRole>> Create(JobRole jobRole)
        {
            var response = new BaseItemResponse<JobRole>();

            var entity = Mapper.Map<Models.Database.JobRole>(jobRole);
            entity.JobRoleId = Guid.NewGuid();
            entity.IsActive = true;

            await _psmDatabaseContext.AddAsync(entity);
            await _psmDatabaseContext.SaveChangesAsync();

            response.Entity = Mapper.Map<JobRole>(entity);

            return response;
        }

        public async Task<BaseItemResponse<JobRole>> Update(Guid jobRoleId, JobRole jobRole)
        {
            var response = new BaseItemResponse<JobRole>();
            var data = await _psmDatabaseContext.JobRoles.FirstOrDefaultAsync(o => o.JobRoleId == jobRoleId);

            if (data == null)
            {
                response.ErrorMessage = $"Job Role Id {jobRoleId} not found";
            }
            else
            {
                Mapper.Map(jobRole, data);
                await _psmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<JobRole>(data);
            }

            return response;
        }

        public async Task<BaseItemResponse<JobRole>> Activate(Guid jobRoleId)
        {
            return await AmendActiveStatus(jobRoleId, true);
        }

        public async Task<BaseItemResponse<JobRole>> Deactivate(Guid jobRoleId)
        {
            return await AmendActiveStatus(jobRoleId, false);
        }

        private async Task<BaseItemResponse<JobRole>> AmendActiveStatus(Guid jobRoleId, bool isActive)
        {
            var response = new BaseItemResponse<JobRole>();
            var data = await _psmDatabaseContext.JobRoles.FirstOrDefaultAsync(o => o.JobRoleId == jobRoleId);

            if (data == null)
            {
                response.ErrorMessage = $"Job Role Id {jobRoleId} not found";
            }
            else
            {
                data.IsActive = isActive;
                await _psmDatabaseContext.SaveChangesAsync();
                response.Entity = Mapper.Map<JobRole>(data);
            }

            return response;
        }
    }
}
