using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Contacts
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class ContactType : IDatabaseEntityPrimaryKey<Guid>, IDatabaseEntitySupportsActiveProperty
    {
        public Guid ContactTypeId { get; set; }

        public string Name { get; set; }

        public Guid ContactValidationId { get; set; }

        //
        // Navigation to related Records
        //
        public ICollection<Contact> NavContacts { get; set; }

        public ContactValidation NavContactValidation { get; set; }

        public bool IsActive { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => ContactTypeId;
            set => ContactTypeId = value;
        }

        // Interface IDatabaseEntityPrimaryKey
    }
}