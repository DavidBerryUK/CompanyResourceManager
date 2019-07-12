﻿using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper
{
    public class MapTableJobRole : IDatabaseTableMapperConfig

    {
        public void Map(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<JobRole>(entity =>
            {
                entity.ToTable("JobRoleSummary");

                entity.HasKey(e => e.JobRoleId);

                entity.Property(e => e.JobRoleId)
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.IsActive)
                    .IsRequired();

                entity.HasMany(many => many.NavPeople)
                    .WithOne(one => one.NavJobRole)
                    .HasForeignKey(key => key.JobRoleId);
            });
        }
    }
}
