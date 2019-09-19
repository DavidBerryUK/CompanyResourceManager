using System;
using System.Collections.Generic;
using CRM.Models.Database.Interfaces;
using CRM.Models.Database.Security;

namespace CRM.Models.Database.Teams
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class Team : IDatabaseEntityPrimaryKey<Guid>, IDatabaseEntitySupportsActiveProperty
    {
        public Guid TeamId { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public bool IsActive { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<PersonTeam> NavPersonTeams { get; set; }

        public ICollection<SecurityGroupTeam> NavSecurityGroupTeams { get; set; }

        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => TeamId;
            set => TeamId = value;
        }

        // Interface IDatabaseEntityPrimaryKey
    }
}