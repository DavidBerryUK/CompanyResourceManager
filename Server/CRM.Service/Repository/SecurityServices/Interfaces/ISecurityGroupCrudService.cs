using CRM.Models.Database.Security;
using CRM.Models.Rest.Security;
using CRM.Service.Repository.BaseServices.Interface;
using System;

namespace CRM.Service.Repository.SecurityServices.Interfaces
{
    public interface ISecurityGroupCrudService : IBaseCrudService<SecurityGroup ,SecurityGroupSummary, SecurityGroupExtended, Guid>
    {
    }
}
