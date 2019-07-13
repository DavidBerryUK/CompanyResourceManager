using System;
using System.Collections.Generic;
using System.Text;

namespace CRM.Models.Database
{
    public class SecurityGroupPerson
    {
        public Guid SecurityGroupId { get; set; }

        public Guid PersonId { get; set; }
    }
}
