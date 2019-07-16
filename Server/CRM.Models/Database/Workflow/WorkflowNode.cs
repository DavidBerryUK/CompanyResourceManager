using System;
using System.Collections.Generic;

namespace CRM.Models.Database.Workflow
{
    public class WorkflowNode
    {
        public Guid WorkflowNodeId { get; set; }

        public Guid WorkflowId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public Workflow NavWorkflow { get; set; }

        public ICollection<WorkflowAction> NavWorkflowActions { get; set; }

        public ICollection<WorkflowInstance> NavWorkflowInstances{ get; set; }
    }
}
