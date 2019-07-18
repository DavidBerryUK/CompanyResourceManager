using System;

namespace CRM.Models.Rest.Workflow
{
    public class WorkflowCategorySummary
    {
        public Guid WorkflowCategoryId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

    }
}
