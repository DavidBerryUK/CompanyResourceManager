using System;
using System.Collections.Generic;

namespace CRM.Models.Rest.Contacts
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class ContactGroupSummary
    {
        public Guid ContactGroupId { get; set; }

        public Guid PreferredContactId { get; set; }

        public string Notes { get; set; }

        public bool IsActive { get; set; }

        public List<ContactSummary> Contacts { get; set; }
    }
}