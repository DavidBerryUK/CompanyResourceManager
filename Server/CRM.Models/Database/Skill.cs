using System;
using System.Collections.Generic;

namespace CRM.Models.Database
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class Skill
    {
        public Guid SkillId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<PersonSkill>  NavPersonSkills { get; set; }
    }
}
