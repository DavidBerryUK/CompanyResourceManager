using System;
using CRM.Models.Database.JobRoles;
using CRM.Models.Rest.JobRole;
using CRM.Service.Repository.BaseServices.Interface;

namespace CRM.Service.Repository.JobRoleServices.Interfaces
{
    public interface IJobRoleCrudService : IBaseExtendedCrudService<JobRole, JobRoleSummary, JobRoleExtended, Guid>
    {
    }
}