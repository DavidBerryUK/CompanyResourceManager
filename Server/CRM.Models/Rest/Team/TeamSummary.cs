﻿using System;

namespace CRM.Models.Rest.Team
{
    /// <summary>
    /// Summary records are returned for lists with primary information,
    ///   note that drop down lists use the ListItem class
    /// </summary>
    public class TeamSummary
    {
        public Guid TeamId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

    }
}
