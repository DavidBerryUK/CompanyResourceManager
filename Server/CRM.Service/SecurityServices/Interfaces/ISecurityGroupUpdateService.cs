using System;
using System.Threading.Tasks;
using CRM.Models.Rest.BaseResponse;
using CRM.Models.Rest.Security;

namespace CRM.Service.SecurityServices.Interfaces
{
    public interface ISecurityGroupUpdateService
    {
        Task<BaseItemResponse<SecurityGroupExtended>> Create(SecurityGroupExtended securityGroup);
        Task<BaseItemResponse<SecurityGroupExtended>> Update(Guid securityGroupId, SecurityGroupExtended securityGroup);
        Task<BaseItemResponse<SecurityGroupSummary>> Activate(Guid securityGroupId);
        Task<BaseItemResponse<SecurityGroupSummary>> Deactivate(Guid securityGroupId);
    }
}