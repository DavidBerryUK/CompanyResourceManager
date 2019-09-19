using System;
using System.Linq;
using CRM.Database.Context;
using CRM.Models.Database.Security;
using CRM.Models.Rest.Security;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.SecurityServices.Interfaces;

namespace CRM.Service.Repository.SecurityServices
{
    public class SecurityGroupExtendedCrudService :
        BaseExtendedCrudService<SecurityGroup, SecurityGroupSummary, SecurityGroupExtended, Guid>,
        ISecurityGroupCrudService
    {
        public SecurityGroupExtendedCrudService(CrmDatabaseContext dbContext) : base(dbContext)
        {
        }

        public override IQueryable<SecurityGroup> QueryOrder(IQueryable<SecurityGroup> query)
        {
            return query
                .OrderBy(order => order.Name);
        }

        public override Guid CreateNewPrimaryKey()
        {
            return Guid.NewGuid();
        }
    }
}