using CRM.Models.Database.Interfaces;
using System;

namespace CRM.Models.Database.Contacts
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class Contact : IDatabaseEntity<Guid>
    {
        public Guid ContactId { get; set; }

        public Guid ContactGroupId { get; set; }

        public Guid ContactTypeId { get; set; }

        public string Value { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //
        public ContactType NavContactType { get; set; }
        public ContactGroup NavContactGroup { get; set; }


        // Interface IDatabaseEntity
        public Guid PrimaryKey
        {
            get => this.ContactId;
            set => this.ContactId = value;
        }
        // Interface IDatabaseEntity
    }
}
