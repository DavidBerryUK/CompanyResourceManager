using System;
using System.Collections.Generic;

namespace CRM.Models.Database.Workflow
{
    public class WorkflowCategory
    {
        public Guid WorkflowCategoryId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<Workflow> NavWorkflows { get; set; }
    }
}
