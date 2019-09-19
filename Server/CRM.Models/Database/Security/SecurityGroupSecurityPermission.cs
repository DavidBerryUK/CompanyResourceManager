using System;

namespace CRM.Models.Database.Security
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class SecurityGroupSecurityPermission
    {
        public Guid SecurityGroupId { get; set; }

        public Guid SecurityPermissionId { get; set; }

        //
        // Navigation to related Records
        //

        public SecurityPermission NavSecurityPermission { get; set; }

        public SecurityGroup NavSecurityGroup { get; set; }
    }
}