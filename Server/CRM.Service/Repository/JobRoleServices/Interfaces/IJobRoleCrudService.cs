using CRM.Models.Database.JobRoles;
using CRM.Models.Rest.JobRole;
using CRM.Service.Repository.BaseServices.Interface;
using System;

namespace CRM.Service.Repository.JobRoleServices.Interfaces
{
    public interface IJobRoleCrudService : IBaseCrudService<JobRole, JobRoleSummary, JobRoleExtended, Guid>
    {
    }
}
