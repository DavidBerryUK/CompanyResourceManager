using System;
using System.Collections.Generic;
using System.Text;

namespace CRM.Models.Database
{
    public class Permission
    {
        public Guid PermissionId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public Int16 BitGroup { get; set; }

        public byte Bit { get; set; }

        public bool IsActive { get; set; }
    }
}
