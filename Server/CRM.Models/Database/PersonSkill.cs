using System;

namespace CRM.Models.Database
{
    public class PersonSkill
    {
        public Guid PersonId { get; set; }

        public Guid SkillId { get; set; }

        public Person NavPerson { get; set; }

        public Skill NavSkill { get; set; }
    }
}
