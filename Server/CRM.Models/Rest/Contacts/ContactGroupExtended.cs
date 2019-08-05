using System.Collections.Generic;

namespace CRM.Models.Rest.Contacts
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class ContactGroupExtended : ContactGroupSummary
    {
        public List<ContactExtended> Contacts { get; set; }
    }
}
