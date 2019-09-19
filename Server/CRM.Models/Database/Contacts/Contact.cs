using System;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Contacts
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class Contact : IDatabaseEntityPrimaryKeyIsActive<Guid>
    {
        public Guid ContactId { get; set; }

        public Guid ContactGroupId { get; set; }

        public Guid ContactTypeId { get; set; }

        public string Value { get; set; }

        //
        // Navigation to related Records
        //
        public ContactType NavContactType { get; set; }
        public ContactGroup NavContactGroup { get; set; }

        public bool IsActive { get; set; }


        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => ContactId;
            set => ContactId = value;
        }

        // Interface IDatabaseEntityPrimaryKey
    }
}