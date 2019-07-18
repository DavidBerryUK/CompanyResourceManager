using System;
using CRM.Models.Database.Workflow;

namespace CRM.Models.Database.JobApplicants
{
    public class JobApplicantSummary
    {
        public Guid JobApplicantId { get; set; }

        public Guid JobRoleId { get; set; }

        public Guid WorkflowInstanceId { get; set; }

        public string Title { get; set; }

        public string Forename { get; set; }

        public string MiddleNames { get; set; }

        public string Surname { get; set; }
    }
}
