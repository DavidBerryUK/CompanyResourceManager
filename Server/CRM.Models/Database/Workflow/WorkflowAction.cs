using System;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Workflow
{
    public class WorkflowAction : IDatabaseEntityPrimaryKeyIsActive<Guid>
    {
        public Guid WorkflowActionId { get; set; }

        public Guid WorkflowNodeId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int DisplayOrder { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public WorkflowNode NavWorkFlowNode { get; set; }


        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => this.WorkflowActionId;
            set => this.WorkflowActionId = value;
        }
        // Interface IDatabaseEntityPrimaryKey
    }
}
