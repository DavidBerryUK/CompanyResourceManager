﻿using System;

namespace CRM.Models.Rest.Workflow
{
    /// <summary>
    ///     Summary records are returned for lists with primary information,
    ///     note that drop down lists use the ListItem class
    /// </summary>
    public class WorkflowSummary
    {
        public Guid WorkflowId { get; set; }

        public Guid WorkflowCategoryId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }
    }
}