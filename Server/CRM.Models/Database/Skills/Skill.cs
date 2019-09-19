using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Skills
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class Skill : IDatabaseEntityPrimaryKey<Guid>, IDatabaseEntitySupportsActiveProperty
    {
        public Guid SkillId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<PersonSkill> NavPersonSkills { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => SkillId;
            set => SkillId = value;
        }

        // Interface IDatabaseEntityPrimaryKey
    }
}