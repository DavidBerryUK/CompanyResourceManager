using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using System;
using System.Threading.Tasks;
using CRM.Models.Rest.JobRole;

namespace CRM.Service.JobRoleServices.Interfaces
{
    public interface IJobRoleGetService
    {
        Task<BaseCollectionResponse<JobRoleSummary>> GetAllAsync();
        Task<BaseCollectionResponse<JobRoleSummary>> GetFilteredAsync(JobRoleFilteredListRequest filter);
        Task<BaseCollectionResponse<ListItem>> GetListItemsAsync();
        Task<BaseItemResponse<JobRoleExtended>> GetByIdAsync(Guid jobRoleId);
    }
}