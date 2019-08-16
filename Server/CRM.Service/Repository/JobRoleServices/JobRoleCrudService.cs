using CRM.Database.Context;
using CRM.Models.Database.JobRoles;
using CRM.Models.Rest.JobRole;
using CRM.Service.Repository.BaseServices;
using CRM.Service.Repository.JobRoleServices.Interfaces;
using System;
using System.Linq;

namespace CRM.Service.Repository.JobRoleServices
{
    public class JobRoleExtendedCrudService  : BaseExtendedCrudService<JobRole, JobRoleSummary, JobRoleExtended, Guid> ,IJobRoleCrudService
    {
        public JobRoleExtendedCrudService(CrmDatabaseContext dbContext) : base(dbContext)
        {
        }

        public override IQueryable<JobRole> QueryOrder(IQueryable<JobRole> query)
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
