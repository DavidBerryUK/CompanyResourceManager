using System;
using System.Collections.Generic;

namespace CRM.Models.Database
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class SecurityGroup
    {
        public Guid SecurityGroupId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<SecurityGroupTeam> NavSecuityGroupTeams { get; set; }

        public ICollection<SecurityGroupPerson> NavSecurityGroupPersons { get; set; }

        public ICollection<SecurityGroupSecurityPermission> NavSecurityGroupSecurityPermission { get; set; }
    }
}
