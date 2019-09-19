using System;
using CRM.Models.Database.Teams;

namespace CRM.Models.Database.Security
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class SecurityGroupTeam
    {
        public Guid SecurityGroupId { get; set; }

        public Guid TeamId { get; set; }

        //
        // Navigation to related Records
        //

        public SecurityGroup NavSecurityGroup { get; set; }

        public Team NavTeam { get; set; }
    }
}