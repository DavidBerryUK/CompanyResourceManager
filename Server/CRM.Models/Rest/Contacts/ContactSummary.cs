using System;

namespace CRM.Models.Rest.Contacts
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class ContactSummary
    {
        public Guid ContactId { get; set; }

        public Guid ContactGroupId { get; set; }

        public Guid ContactTypeId { get; set; }

        public string ContactTypeName { get; set; }

        public string Value { get; set; }

        public bool IsActive { get; set; }
    }
}