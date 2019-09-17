using System;
using System.Collections.Generic;
using System.Text;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Contacts
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class ContactValidation : IDatabaseEntityPrimaryKey<Guid>
    {
        public Guid ContactValidationId { get; set; }
        public string Name { get; set; }
        public string RegEx { get; set; }
        public bool IsDefault { get; set; }

        //
        // Navigation to related Records
        //
        public ICollection<ContactType> NavContactTypes { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => this.ContactValidationId;
            set => this.ContactValidationId = value;
        }
        // Interface IDatabaseEntityPrimaryKey
    }
}
