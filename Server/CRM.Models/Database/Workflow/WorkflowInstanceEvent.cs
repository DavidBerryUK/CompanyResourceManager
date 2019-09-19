using System;
using CRM.Models.Database.Interfaces;
using CRM.Models.Database.Persons;

namespace CRM.Models.Database.Workflow
{
    public class WorkflowInstanceEvent : IDatabaseEntityPrimaryKey<Guid>
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

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => WorkflowInstanceEventId;
            set => WorkflowInstanceEventId = value;
        }

        // Interface IDatabaseEntityPrimaryKey
    }
}