using System;
using System.Collections.Generic;

namespace CRM.Models.Database
{
    public class Person
    {
        public Guid PersonId { get; set; }

        public Guid JobRoleId { get; set; }

        public string Forename { get; set; }

        public string Surname { get; set; }

        public string Email { get; set; }

        public bool IsActive { get; set; }

        public JobRole NavJobRole { get; set; }

        public ICollection<PersonAsset> NavPersonAssets { get; set; }

        public ICollection<PersonTeam> NavPersonTeams { get; set; }

        public ICollection<PersonSkill> NavPersonSkills { get; set; }
    }
}
