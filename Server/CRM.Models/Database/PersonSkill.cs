using System;

namespace CRM.Models.Database
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class PersonSkill
    {
        public Guid PersonId { get; set; }

        public Guid SkillId { get; set; }

        //
        // Navigation to related Records
        //

        public Person NavPerson { get; set; }

        public Skill NavSkill { get; set; }
    }
}
