using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.JobRole.Response;
using System;
using System.Threading.Tasks;

namespace CRM.Service.JobRoleServices.Interfaces
{
    public interface IJobRoleUpdateService
    {
        Task<BaseItemResponse<JobRoleExtended>> Create(JobRoleExtended JobRole);
        Task<BaseItemResponse<JobRoleExtended>> Update(Guid jobRoleId, JobRoleExtended jobRole);
        Task<BaseItemResponse<JobRoleSummary>> Activate(Guid jobRoleId);
        Task<BaseItemResponse<JobRoleSummary>> Deactivate(Guid jobRoleId);
    }
}