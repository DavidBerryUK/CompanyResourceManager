using System;
using System.Collections.Generic;

namespace CRM.Models.Database
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class Team
    {
        public Guid TeamId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<PersonTeam> NavPersonTeams { get; set; }

        public ICollection<SecurityGroupTeam> NavSecurityGroupTeams { get; set; }
    }
}
