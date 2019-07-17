using System;
using System.Collections.Generic;
using System.Text;
using CRM.Models.Database.Workflow;

namespace CRM.Models.Database.JobApplicant
{
    public class JobApplicant
    {
        public Guid JobApplicantId { get; set; }

        public Guid JobRoleId { get; set; }

        public Guid WorkflowInstanceId { get; set; }

        public string Title { get; set; }

        public string Forename { get; set; }

        public string MiddleNames { get; set; }

        public string Surname { get; set; }

        public WorkflowInstance NavWorkflowInstance { get; set; }
    }
}
