using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Database.DatabaseMapper
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableJobRole : IDatabaseTableMapperConfig

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

            modelBuilder.Entity<JobRole>(entity =>
            {
                entity.ToTable("JobRole");

                entity.HasKey(e => e.JobRoleId);

                entity.Property(e => e.JobRoleId)
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.IsActive)
                    .IsRequired();

                entity.HasMany(many => many.NavPerson)
                    .WithOne(one => one.NavJobRole)
                    .HasForeignKey(key => key.JobRoleId);
            });
        }
    }
}
