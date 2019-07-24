using System;
using System.Threading.Tasks;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Security;

namespace CRM.Service.SecurityServices.Interfaces
{
    public interface ISecurityGroupGetService
    {
        Task<BaseCollectionResponse<SecurityGroupSummary>> GetAllAsync();
        Task<BaseCollectionResponse<SecurityGroupSummary>> GetFilteredAsync(SecurityGroupFilteredListRequest filter);
        Task<BaseCollectionResponse<ListItem>> GetListItemsAsync();
        Task<BaseItemResponse<SecurityGroupExtended>> GetByIdAsync(Guid securityGroupId);
    }
}