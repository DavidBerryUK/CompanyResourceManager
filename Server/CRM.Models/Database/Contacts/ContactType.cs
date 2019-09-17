using CRM.Models.Database.Interfaces;
using System;
using System.Collections.Generic;

namespace CRM.Models.Database.Contacts
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class ContactType : IDatabaseEntityPrimaryKeyIsActive<Guid>
    {
        public Guid ContactTypeId { get; set; }

        public string Name { get; set; }

        public Guid ContactValidationId { get; set; }

        public bool IsActive { get; set; }


        //
        // Navigation to related Records
        //
        public ICollection<Contact> NavContacts { get; set; }

        public ContactValidation NavContactValidation { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => this.ContactTypeId;
            set => this.ContactTypeId = value;
        }
        // Interface IDatabaseEntityPrimaryKey
    }
}
