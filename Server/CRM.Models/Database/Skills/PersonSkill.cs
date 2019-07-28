using CRM.Models.Database.Interfaces;
using CRM.Models.Database.Persons;
using System;

namespace CRM.Models.Database.Skills
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class PersonSkill : IDatabaseLinkEntity<Guid>
    {
        public Guid PersonId { get; set; }

        public Guid SkillId { get; set; }

        //
        // Navigation to related Records
        //

        public Person NavPerson { get; set; }

        public Skill NavSkill { get; set; }

        public (Guid first, Guid second) GetKey => (first: PersonId, second: SkillId);
    }
}
