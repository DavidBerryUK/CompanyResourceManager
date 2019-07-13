﻿using System.Diagnostics.CodeAnalysis;
using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableSecurityGroup : IDatabaseTableMapperConfig
    {
        public void Map(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SecurityGroup>(entity =>
            {
                entity.ToTable("SecurityGroup");

                entity.HasKey(e => e.SecurityGroupId);

                entity.Property(e => e.SecurityGroupId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(2000);

                entity.Property(e => e.IsActive)
                    .IsRequired();

                entity.HasMany(many => many.NavSecurityGroupTeams)
                    .WithOne(one => one.NavSecurityGroup)
                    .HasForeignKey(foreignKey => foreignKey.SecurityGroupId);

                entity.HasMany(many => many.NavSecurityGroupPersons)
                    .WithOne(one => one.NavSecurityGroup)
                    .HasForeignKey(foreignKey => foreignKey.SecurityGroupId);

                entity.HasMany(many => many.NavSecurityGroupSecurityPermission)
                  .WithOne(one => one.NavSecurityGroup)
                  .HasForeignKey(foreignKey => foreignKey.SecurityGroupId);
            });
        }
    }
}
