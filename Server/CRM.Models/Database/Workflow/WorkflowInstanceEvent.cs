using System;
using CRM.Models.Database.Persons;

namespace CRM.Models.Database.Workflow
{
    public class WorkflowInstanceEvent
    {
        public Guid WorkflowInstanceEventId { get; set; }

        public Guid WorkflowInstanceId { get; set; }

        public Guid PersonId { get; set; }

        public DateTime CreatedDateTime { get; set; }

        public string Comments { get; set; }

        //
        // Navigation to related Records
        //

        public WorkflowInstance NavWorkflowInstance { get; set; }

        public Person NavPerson { get; set; }
    }
}
