using System;
using CRM.Models.Database.Security;
using CRM.Models.Rest.Security;
using CRM.Service.Repository.BaseCrudService.Interface;

namespace CRM.Service.Repository.SecurityServices.Interfaces
{
    public interface ISecurityGroupCrudService : IBaseCrudService<SecurityGroup ,SecurityGroupSummary, SecurityGroupExtended, Guid>
    {
    }
}
