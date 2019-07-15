using System;
using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using CRM.Utilities.Reflection;
using Microsoft.EntityFrameworkCore;

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
