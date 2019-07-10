using System;

namespace CRM.Models.Rest.JobRole.Response
{
    public class JobRole
    {
        public Guid JobRoleId { get; set; }

        public string Name { get; set; }

        public bool IsActive { get; set; }

    }
}
