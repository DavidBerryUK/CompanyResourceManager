using CRM.Models.Database.Interfaces;
using System;
using System.Collections.Generic;

namespace CRM.Models.Database.Contacts
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class ContactType : IDatabaseEntity<Guid>
    {
        public Guid ContactTypeId { get; set; }

        public string Name { get; set; }


        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //
        public ICollection<Contact> NavContacts { get; set; }

        // Interface IDatabaseEntity
        public Guid PrimaryKey
        {
            get => this.ContactTypeId;
            set => this.ContactTypeId = value;
        }
        // Interface IDatabaseEntity
    }
}
