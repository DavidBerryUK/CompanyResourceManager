using System;
using System.Threading.Tasks;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.JobRole.Requests;
using CRM.Models.Rest.JobRole.Response;
using CRM.Models.Rest.Lists;

namespace CRM.Service.JobRoleServices.Interfaces
{
    public interface IJobRoleGetService
    {
        Task<BaseCollectionResponse<JobRole>> GetAllAsync();
        Task<BaseCollectionResponse<JobRole>> GetFilteredAsync(JobRoleFilteredListRequest filter);
        Task<BaseCollectionResponse<ListItem>> GetListItemsAsync();
        Task<BaseItemResponse<JobRole>> GetByIdAsync(Guid jobRoleId);
    }
}