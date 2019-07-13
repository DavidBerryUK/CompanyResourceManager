using System;

namespace CRM.Models.Database
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class PersonTeam
    {
        public Guid PersonId { get; set; }

        public Guid TeamId { get; set; }

        //
        // Navigation to related Records
        //

        public Person NavPerson { get; set; }

        public Team NavTeam { get; set; }
    }
}
