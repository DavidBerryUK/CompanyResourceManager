using System;

namespace CRM.Models.Rest.Workflow
{
    public class WorkflowNodeSummary
    {
        public Guid WorkflowNodeId { get; set; }

        public Guid WorkflowId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }
    }
}
