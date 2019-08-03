using CRM.Models.Database.Persons;
using System;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Security
{
    /// <summary>
    /// Database Entity Object
    /// </summary>
    public class SecurityGroupPerson : IDatabaseLinkEntity<Guid>
    {
        public Guid SecurityGroupId { get; set; }

        public Guid PersonId { get; set; }

        //
        // Navigation to related Records
        //

        public Person NavPerson { get; set; }

        public SecurityGroup NavSecurityGroup { get; set; }

        public (Guid first, Guid second) GetKey => (first: PersonId, second: SecurityGroupId);
    }
}
