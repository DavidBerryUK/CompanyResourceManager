using System;

namespace CRM.Models.Rest.Security
{
    /// <summary>
    ///     Summary records are returned for lists with primary information,
    ///     note that drop down lists use the ListItem class
    /// </summary>
    public class SecurityPermissionSummary
    {
        public Guid SecurityPermissionId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public short BitGroup { get; set; }

        public byte Bit { get; set; }

        public bool IsActive { get; set; }
    }
}