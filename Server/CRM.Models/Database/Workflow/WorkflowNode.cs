using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Workflow
{
    public class WorkflowNode : IDatabaseEntityPrimaryKeyIsActive<Guid>
    {
        public Guid WorkflowNodeId { get; set; }

        public Guid WorkflowId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => this.WorkflowNodeId;
            set => this.WorkflowNodeId = value;
        }
        // Interface IDatabaseEntityPrimaryKey

        //
        // Navigation to related Records
        //

        public Workflow NavWorkflow { get; set; }

        public ICollection<WorkflowAction> NavWorkflowActions { get; set; }

        public ICollection<WorkflowInstance> NavWorkflowInstances{ get; set; }
    }
}
