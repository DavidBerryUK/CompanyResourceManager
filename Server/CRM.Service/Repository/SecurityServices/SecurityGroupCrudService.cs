using AutoMapper;
using CRM.Database.Context;
using CRM.Models.Database.Security;
using CRM.Models.Rest.Security;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.SecurityServices.Interfaces;
using System;
using System.Linq;

namespace CRM.Service.Repository.SecurityServices
{
    public class SecurityGroupExtendedCrudService :
        BaseExtendedCrudService<SecurityGroup, SecurityGroupSummary, SecurityGroupExtended, Guid>,
        ISecurityGroupCrudService
    {
        public SecurityGroupExtendedCrudService(
            CrmDatabaseContext dbContext, 
            IMapper mapper) : base(dbContext,mapper)
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