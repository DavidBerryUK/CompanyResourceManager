using System;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Rest.Contacts
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class ContactValidationSummary
    {
        public Guid ContactValidationId { get; set; }
        public string Name { get; set; }
        public string RegEx { get; set; }
        public bool IsDefault { get; set; }


    }
}
