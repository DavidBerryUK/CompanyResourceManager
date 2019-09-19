using System;
using System.Collections.Generic;
using CRM.Models.Database.Assets;
using CRM.Models.Database.Interfaces;
using CRM.Models.Database.JobRoles;
using CRM.Models.Database.Security;
using CRM.Models.Database.Skills;
using CRM.Models.Database.Teams;
using CRM.Models.Database.Workflow;

namespace CRM.Models.Database.Persons
{
    /// <summary>
    ///     Database Entity Object
    /// </summary>
    public class Person : IDatabaseEntityPrimaryKey<Guid>, IDatabaseEntitySupportsActiveProperty
    {
        public Guid PersonId { get; set; }

        public Guid JobRoleId { get; set; }

        public string Forename { get; set; }

        public string Surname { get; set; }

        public string Email { get; set; }

        public JobRole NavJobRole { get; set; }

        //
        // Navigation to related Records
        //

        public ICollection<PersonAsset> NavPersonAssets { get; set; }

        public ICollection<PersonTeam> NavPersonTeams { get; set; }

        public ICollection<PersonSkill> NavPersonSkills { get; set; }

        public ICollection<SecurityGroupPerson> NavSecurityGroupPerson { get; set; }

        public ICollection<WorkflowInstanceEvent> NavWorkflowInstanceEvents { get; set; }

        public ICollection<WorkflowInstance> NavWorkflowInstancesCreated { get; set; }

        public bool IsActive { get; set; }


        // Interface IDatabaseEntityPrimaryKey
        public Guid PrimaryKey
        {
            get => PersonId;
            set => PersonId = value;
        }

        // Interface IDatabaseEntityPrimaryKey
    }
}