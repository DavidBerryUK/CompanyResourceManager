using CRM.Models.Database.Persons;
using System;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Teams
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class PersonTeam : IDatabaseLinkEntity<Guid>
    {
        public Guid PersonId { get; set; }

        public Guid TeamId { get; set; }

        //
        // Navigation to related Records
        //

        public Person NavPerson { get; set; }

        public Team NavTeam { get; set; }

        public (Guid first, Guid second) GetKey => (first:PersonId, second:TeamId);
    }
}
