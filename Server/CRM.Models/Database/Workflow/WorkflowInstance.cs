using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;
using CRM.Models.Database.JobApplicants;
using CRM.Models.Database.Persons;

namespace CRM.Models.Database.Workflow
{
    public class WorkflowInstance : IDatabaseEntityPrimaryKey<Guid>
    {
        public Guid WorkflowInstanceId { get; set; }

        public Guid WorkflowId { get; set; }

        public Guid WorkflowNodeId { get; set; }

        public Guid CreatedByPersonId { get; set; }

        public DateTime CreatedDateTime { get; set; }

        //
        // Navigation to related Records
        //

        public Workflow NavWorkflow { get; set; }

        public Person NavCreatedByPerson { get; set; }

        public WorkflowNode NavWorkFlowNode { get; set; }

        public ICollection<WorkflowInstanceEvent> NavWorkflowInstanceEvents { get; set; }

        // optional 1 to 1 links
        //
        public JobApplicant NavJobApplicant { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => WorkflowInstanceId;
            set => WorkflowInstanceId = value;
        }

        public bool IsActive
        {
            get => throw new NotImplementedException();
            set => throw new NotImplementedException();
        }

        // Interface IDatabaseEntityPrimaryKey
    }
}