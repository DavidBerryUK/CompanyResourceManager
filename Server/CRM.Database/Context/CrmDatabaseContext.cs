using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Assets;
using CRM.Models.Database.Contacts;
using CRM.Models.Database.JobApplicants;
using CRM.Models.Database.JobRoles;
using CRM.Models.Database.Persons;
using CRM.Models.Database.Security;
using CRM.Models.Database.Skills;
using CRM.Models.Database.Teams;
using CRM.Utilities.Reflection;
using Microsoft.EntityFrameworkCore;
using System;

namespace CRM.Database.Context
{
    public class CrmDatabaseContext : DbContext
    {
        public CrmDatabaseContext(DbContextOptions options)
            : base(options)
        { }

        public CrmDatabaseContext()
        { }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            //
            // Validate Parameters
            //
            if (modelBuilder == null)
            {
                throw new ArgumentNullException(nameof(modelBuilder));
            }

            var mappers = new ClassListFactory().CreateListOfClassesWithInterface<IDatabaseTableMapperConfig>(GetType().Assembly);
            mappers.ForEach(o => o.Map(modelBuilder));
        }

        public virtual DbSet<Asset> Assets { get; set; }
        public virtual DbSet<AssetType> AssetTypes { get; set; }
        public virtual DbSet<JobApplicant> JobApplicants { get; set; }
        public virtual DbSet<JobRole> JobRoles { get; set; }
        public virtual DbSet<Person> Persons { get; set; }
        public virtual DbSet<PersonAsset> PersonAssets { get; set; }
        public virtual DbSet<PersonSkill> PersonsSkills { get; set; }
        public virtual DbSet<PersonTeam> PersonsTeams { get; set; }
        public virtual DbSet<SecurityGroup> SecurityGroups { get; set; }
        public virtual DbSet<SecurityGroupPerson> SecurityGroupPersons { get; set; }
        public virtual DbSet<SecurityGroupSecurityPermission> SecurityGroupSecurityPermissions { get; set; }
        public virtual DbSet<SecurityGroupTeam> SecurityGroupTeams { get; set; }
        public virtual DbSet<SecurityPermission> SecurityPermissions { get; set; }
        public virtual DbSet<Skill> Skills { get; set; }
        public virtual DbSet<Team> Teams { get; set; }
        public virtual DbSet<Contact> Contacts { get; set; }
        public virtual DbSet<ContactType> ContactTypes { get; set; }
        public virtual DbSet<ContactGroup> ContactGroups { get; set; }
    }
}
