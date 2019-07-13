using System;

namespace CRM.Models.Rest.Person
{
    /// <summary>
    /// Summary records are returned for lists with primary information,
    ///   note that drop down lists use the ListItem class
    /// </summary>
    public class PersonSummary
    {
        public Guid PersonId { get; set; }

        public string Forename { get; set; }

        public string Surname { get; set; }

        public string Email { get; set; }

        public Guid JobRoleId { get; set; }

        public bool IsActive { get; set; }

        public string JobRoleName { get; set; }
    }
}
