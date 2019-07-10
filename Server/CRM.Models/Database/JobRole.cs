using System;
using System.Collections.Generic;

namespace CRM.Models.Database
{
    public class JobRole
    {
        public Guid JobRoleId { get; set; }

        public string Name { get; set; }

        public bool IsActive { get; set; }

        public ICollection<Person> NavPeople { get; set; }
    }
}
