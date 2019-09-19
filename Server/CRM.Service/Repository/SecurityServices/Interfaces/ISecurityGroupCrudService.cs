using System;
using CRM.Models.Database.Security;
using CRM.Models.Rest.Security;
using CRM.Service.Repository.BaseServices.Interface;

namespace CRM.Service.Repository.SecurityServices.Interfaces
{
    public interface ISecurityGroupCrudService : IBaseExtendedCrudService<SecurityGroup, SecurityGroupSummary,
        SecurityGroupExtended, Guid>
    {
    }
}