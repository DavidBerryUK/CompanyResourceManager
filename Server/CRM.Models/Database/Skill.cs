using System;
using System.Collections.Generic;

namespace CRM.Models.Database
{
    public class Skill
    {
        public Guid SkillId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        public ICollection<PersonSkill>  NavPersonSkills { get; set; }
    }
}
