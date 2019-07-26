using System;

namespace CRM.Models.Rest.Workflow
{
    /// <summary>
    /// Summary records are returned for lists with primary information,
    ///   note that drop down lists use the ListItem class
    /// </summary>
    public class WorkflowInstanceEventSummary
    {
        public Guid WorkflowInstanceEventId { get; set; }

        public Guid WorkflowInstanceId { get; set; }

        public Guid PersonId { get; set; }

        public DateTime CreatedDateTime { get; set; }

        public string Comments { get; set; }

    }
}
