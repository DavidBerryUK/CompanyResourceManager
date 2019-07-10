using System;
using System.Threading.Tasks;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.JobRole.Response;

namespace CRM.Service.JobRoleServices.Interfaces
{
    public interface IJobRoleUpdateService
    {
        Task<BaseItemResponse<JobRole>> Create(JobRole jobRole);
        Task<BaseItemResponse<JobRole>> Update(Guid jobRoleId, JobRole jobRole);
        Task<BaseItemResponse<JobRole>> Activate(Guid jobRoleId);
        Task<BaseItemResponse<JobRole>> Deactivate(Guid jobRoleId);
    }
}