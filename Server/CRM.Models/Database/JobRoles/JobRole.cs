using CRM.Models.Database.Persons;
using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.JobRoles
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class JobRole : IDatabaseEntity<Guid>
    {
        public Guid JobRoleId { get; set; }

        public string Name { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<Person> NavPerson { get; set; }

        // Interface IDatabaseEntity
        public Guid PrimaryKey
        {
            get => this.JobRoleId;
            set => this.JobRoleId = value;
        }
        // Interface IDatabaseEntity
    }
}
