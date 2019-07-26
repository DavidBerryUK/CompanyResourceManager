using System;
using CRM.Models.Database.Interfaces;
using CRM.Models.Database.Workflow;

namespace CRM.Models.Database.JobApplicants
{
    public class JobApplicant : IDatabaseEntity<Guid>
    {
        public Guid JobApplicantId { get; set; }

        public Guid JobRoleId { get; set; }

        public Guid WorkflowInstanceId { get; set; }

        public string Title { get; set; }

        public string Forename { get; set; }

        public string MiddleNames { get; set; }

        public string Surname { get; set; }

        public WorkflowInstance NavWorkflowInstance { get; set; }

        // Interface IDatabaseEntity
        public Guid PrimaryKey => this.JobApplicantId;

        // TODO: is this needed?
        public bool IsActive { get; set; }

        // Interface IDatabaseEntity


    }
}
