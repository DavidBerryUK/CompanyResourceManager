using System;
using System.Collections.Generic;
using CRM.Models.Database.JobApplicants;
using CRM.Models.Database.Persons;

namespace CRM.Models.Database.Workflow
{
    public class WorkflowInstance
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
    }
}
