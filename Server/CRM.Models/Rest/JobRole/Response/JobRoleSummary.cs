using System;

namespace CRM.Models.Rest.JobRole.Response
{
    /// <summary>
    /// Summary records are returned for lists with primary information,
    ///   note that drop down lists use the ListItem class
    /// </summary>
    public class JobRoleSummary
    {
        public Guid JobRoleId { get; set; }

        public string Name { get; set; }

        public bool IsActive { get; set; }

    }
}
