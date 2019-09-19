using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Workflow
{
    public class WorkflowNode : IDatabaseEntityPrimaryKey<Guid>, IDatabaseEntitySupportsActiveProperty
    {
        public Guid WorkflowNodeId { get; set; }

        public Guid WorkflowId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }
        // Interface IDatabaseEntityPrimaryKey

        //
        // Navigation to related Records
        //

        public Workflow NavWorkflow { get; set; }

        public ICollection<WorkflowAction> NavWorkflowActions { get; set; }

        public ICollection<WorkflowInstance> NavWorkflowInstances { get; set; }

        public bool IsActive { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => WorkflowNodeId;
            set => WorkflowNodeId = value;
        }
    }
}