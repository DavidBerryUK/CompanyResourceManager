using CRM.Models.Database.Persons;
using System;
using System.Collections.Generic;

namespace CRM.Models.Database.JobRoles
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class JobRole
    {
        public Guid JobRoleId { get; set; }

        public string Name { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<Person> NavPerson { get; set; }
    }
}
