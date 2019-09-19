using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;
using CRM.Models.Database.Persons;

namespace CRM.Models.Database.JobRoles
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class JobRole : IDatabaseEntityPrimaryKey<Guid>, IDatabaseEntitySupportsActiveProperty
    {
        public Guid JobRoleId { get; set; }

        public string Name { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<Person> NavPerson { get; set; }

        public bool IsActive { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => JobRoleId;
            set => JobRoleId = value;
        }

        // Interface IDatabaseEntityPrimaryKey
    }
}