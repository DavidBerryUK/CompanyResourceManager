using CRM.Models.Database.Contacts;
using CRM.Models.Database.Interfaces;
using System;

namespace CRM.Models.Rest.Contacts
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class ContactExtended 
    {
        public Guid ContactId { get; set; }

        public Guid ContactGroupId { get; set; }

        public Guid ContactTypeId { get; set; }

        public string ContactTypeName { get; set; }

        public string Value { get; set; }

        public bool IsActive { get; set; }
    }
}
