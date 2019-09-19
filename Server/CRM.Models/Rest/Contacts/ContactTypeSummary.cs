using System;

namespace CRM.Models.Rest.Contacts
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class ContactTypeSummary
    {
        public Guid ContactTypeId { get; set; }

        public string Name { get; set; }

        public Guid ContactValidationId { get; set; }

        public bool IsActive { get; set; }
    }
}