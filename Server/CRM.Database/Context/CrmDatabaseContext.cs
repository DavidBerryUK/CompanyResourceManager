using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Assets;
using CRM.Models.Database.JobRoles;
using CRM.Models.Database.Persons;
using CRM.Models.Database.Skills;
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
                throw new ArgumentNullException(nameof (modelBuilder));
            }

            var mappers = new ClassListFactory().CreateListOfClassesWithInterface<IDatabaseTableMapperConfig>(GetType().Assembly);
            mappers.ForEach(o => o.Map(modelBuilder));
        }


        public virtual DbSet<Asset> Assets { get; set; }

        public virtual DbSet<AssetType> AssetTypes { get; set; }

        public virtual DbSet<JobRole> JobRoles { get; set; }

        public virtual DbSet<Person> Persons { get; set; }
        
        public virtual DbSet<Skill> Skills { get; set; }
    }
}
