﻿using System;

namespace CRM.Models.Rest.JobApplicants
{
    /// <summary>
    ///     Summary records are returned for lists with primary information,
    ///     note that drop down lists use the ListItem class
    /// </summary>
    public class JobApplicantSummary
    {
        public Guid JobApplicantId { get; set; }

        public Guid JobRoleId { get; set; }

        public Guid WorkflowInstanceId { get; set; }

        public string Title { get; set; }

        public string Forename { get; set; }

        public string MiddleNames { get; set; }

        public string Surname { get; set; }
    }
}