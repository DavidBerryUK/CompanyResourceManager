using System;
using System.Diagnostics.CodeAnalysis;
using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Persons;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper.Persons
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTablePerson : IDatabaseTableMapperConfig
    {
        public void Map(ModelBuilder modelBuilder)
        {
            //
            // Validate Parameters
            //
            if (modelBuilder == null)
            {
                throw new ArgumentNullException(nameof(modelBuilder));
            }

            modelBuilder.Entity<Person>(entity =>
            {
                entity.ToTable("Person");

                entity.HasKey(e => e.PersonId);

                entity.Property(e => e.PersonId)
                    .ValueGeneratedNever();

                entity.Property(e => e.Forename)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Surname)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.IsActive)
                    .IsRequired();

                entity.HasMany(many => many.NavPersonAssets)
                    .WithOne(one => one.NavPerson)
                    .HasForeignKey(foreignKey => foreignKey.PersonId);

                entity.HasMany(many => many.NavPersonTeams)
                    .WithOne(one => one.NavPerson)
                    .HasForeignKey(foreignKey => foreignKey.PersonId);

                entity.HasMany(many => many.NavPersonSkills)
                    .WithOne(one => one.NavPerson)
                    .HasForeignKey(foreignKey => foreignKey.PersonId);

                entity.HasMany(many => many.NavSecurityGroupPerson)
                    .WithOne(one => one.NavPerson)
                    .HasForeignKey(foreignKey => foreignKey.PersonId);

                entity.HasMany(many => many.NavWorkflowInstancesCreated)
                    .WithOne(one => one.NavCreatedByPerson)
                    .HasForeignKey(foreignKey => foreignKey.CreatedByPersonId);

                entity.HasMany(many => many.NavWorkflowInstanceEvents)
                    .WithOne(one => one.NavPerson)
                    .HasForeignKey(foreignKey => foreignKey.PersonId);

                entity.Ignore(o => o.PrimaryKey);
            });
        }
    }
}