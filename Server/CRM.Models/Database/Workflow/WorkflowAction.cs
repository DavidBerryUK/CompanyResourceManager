using System;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Workflow
{
    public class WorkflowAction : IDatabaseEntityPrimaryKey<Guid>, IDatabaseEntitySupportsActiveProperty
    {
        public Guid WorkflowActionId { get; set; }

        public Guid WorkflowNodeId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int DisplayOrder { get; set; }

        //
        // Navigation to related Records
        //

        public WorkflowNode NavWorkFlowNode { get; set; }

        public bool IsActive { get; set; }


        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => WorkflowActionId;
            set => WorkflowActionId = value;
        }

        // Interface IDatabaseEntityPrimaryKey
    }
}