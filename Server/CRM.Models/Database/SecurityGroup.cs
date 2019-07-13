using System;
using System.Collections.Generic;
using System.Text;

namespace CRM.Models.Database
{
    public class SecurityGroup
    {
        public Guid SecurityGroupId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }
    }
}
