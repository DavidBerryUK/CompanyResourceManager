using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;

namespace CRM.Models.Database.Security
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class SecurityGroup : IDatabaseEntityPrimaryKeyIsActive<Guid>
    {
        public Guid SecurityGroupId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<SecurityGroupTeam> NavSecurityGroupTeams { get; set; }

        public ICollection<SecurityGroupPerson> NavSecurityGroupPersons { get; set; }

        public ICollection<SecurityGroupSecurityPermission> NavSecurityGroupSecurityPermission { get; set; }

        public bool IsActive { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => SecurityGroupId;
            set => SecurityGroupId = value;
        }

        // Interface IDatabaseEntityPrimaryKey
    }
}