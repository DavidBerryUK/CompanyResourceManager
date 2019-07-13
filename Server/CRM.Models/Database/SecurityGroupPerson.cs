using System;

namespace CRM.Models.Database
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
