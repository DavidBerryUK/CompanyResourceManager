using System;
using System.Collections.Generic;

namespace CRM.Models.Database
{
    public class Team
    {
        public Guid TeamId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        public ICollection<PersonTeam> NavPersonTeams { get; set; }
    }
}
