using CRM.Models.Database.Interfaces;
using System;
using System.Collections.Generic;

namespace CRM.Models.Database.Contacts
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class ContactGroup : IDatabaseEntity<Guid>
    {
        public Guid ContactGroupId { get; set; }

        public Guid PreferredContactId { get; set; }

        public string Notes { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //
        public ICollection<Contact> NavContacts { get; set; }

        // Interface IDatabaseEntity
        public Guid PrimaryKey
        {
            get => this.ContactGroupId;
            set => this.ContactGroupId = value;
        }
        // Interface IDatabaseEntity
    }
}
