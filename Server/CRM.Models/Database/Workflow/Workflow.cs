using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Workflow
{
    public class Workflow : IDatabaseEntityPrimaryKeyIsActive<Guid>
    {
        public Guid WorkflowId { get; set; }

        public Guid WorkflowCategoryId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        //
        // Navigation to related Records
        //

        public WorkflowCategory NavWorkflowCategory { get; set; }

        public ICollection<WorkflowInstance> NavWorkflowInstances { get; set; }

        public ICollection<WorkflowNode> NavWorkflowNodes { get; set; }

        public bool IsActive { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => WorkflowId;
            set => WorkflowId = value;
        }

        // Interface IDatabaseEntityPrimaryKey
    }
}