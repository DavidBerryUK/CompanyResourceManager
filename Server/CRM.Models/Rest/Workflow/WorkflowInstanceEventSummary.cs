using System;

namespace CRM.Models.Rest.Workflow
{
    public class WorkflowInstanceEventSummary
    {
        public Guid WorkflowInstanceEventId { get; set; }

        public Guid WorkflowInstanceId { get; set; }

        public Guid PersonId { get; set; }

        public DateTime CreatedDateTime { get; set; }

        public string Comments { get; set; }

    }
}
