using System;
using System.Linq;
using CRM.Database.Context;
using CRM.Models.Database.Security;
using CRM.Models.Rest.Security;
using CRM.Service.Repository.BaseCrudService;
using CRM.Service.Repository.SecurityServices.Interfaces;

namespace CRM.Service.Repository.SecurityServices
{
    public class SecurityGroupCrudService : BaseCrudService<SecurityGroup, SecurityGroupSummary, SecurityGroupExtended, Guid>, ISecurityGroupCrudService
    {
        public SecurityGroupCrudService(CrmDatabaseContext dbContext) : base(dbContext)
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