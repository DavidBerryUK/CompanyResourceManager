using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Workflow
{
    public class WorkflowCategory : IDatabaseEntityPrimaryKeyIsActive<Guid>
    {
        public Guid WorkflowCategoryId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<Workflow> NavWorkflows { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => this.WorkflowCategoryId;
            set => this.WorkflowCategoryId = value;
        }
        // Interface IDatabaseEntityPrimaryKey
    }
}
