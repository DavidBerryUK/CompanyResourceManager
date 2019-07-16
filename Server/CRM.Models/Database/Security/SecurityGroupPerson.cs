using CRM.Models.Database.Persons;
using System;

namespace CRM.Models.Database.Security
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class SecurityGroupPerson
    {
        public Guid SecurityGroupId { get; set; }

        public Guid PersonId { get; set; }

        //
        // Navigation to related Records
        //

        public Person NavPerson { get; set; }

        public SecurityGroup NavSecurityGroup { get; set; }

    }
}
