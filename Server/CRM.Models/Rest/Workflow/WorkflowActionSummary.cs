using System;

namespace CRM.Models.Rest.Workflow
{
    public class WorkflowActionSummary
    {
        public Guid WorkflowActionId { get; set; }

        public Guid WorkflowNodeId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public int DisplayOrder { get; set; }

        public bool IsActive { get; set; }
    }
}
