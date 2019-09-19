using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Contacts
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class ContactGroup : IDatabaseEntityPrimaryKey<Guid>, IDatabaseEntitySupportsActiveProperty
    {
        public Guid ContactGroupId { get; set; }

        public Guid? PreferredContactId { get; set; }

        public string Notes { get; set; }

        //
        // Navigation to related Records
        //
        public ICollection<Contact> NavContacts { get; set; }

        public bool IsActive { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => ContactGroupId;
            set => ContactGroupId = value;
        }

        // Interface IDatabaseEntityPrimaryKey
    }
}