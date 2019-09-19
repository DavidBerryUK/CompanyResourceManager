using System;
using System.Collections.Generic;

namespace CRM.Models.Database.Security
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class SecurityPermission
    {
        public Guid SecurityPermissionId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public short BitGroup { get; set; }

        public byte Bit { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<SecurityGroupSecurityPermission> NavSecurityGroupSecurityPermissions { get; set; }
    }
}