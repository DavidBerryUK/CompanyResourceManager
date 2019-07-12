using System;

namespace CRM.Models.Database
{
    public class PersonTeam
    {
        public Guid PersonId { get; set; }

        public Guid TeamId { get; set; }

        public Person NavPerson { get; set; }

        public Team NavTeam { get; set; }
    }
}
