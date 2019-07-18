using System;

namespace CRM.Models.Rest.Security
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class SecurityGroupSummary
    {
        public Guid SecurityGroupId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

    }
}
