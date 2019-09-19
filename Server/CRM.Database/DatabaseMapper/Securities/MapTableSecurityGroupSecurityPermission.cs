using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Security;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Database.DatabaseMapper.Securities
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableSecurityGroupSecurityPermission : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<SecurityGroupSecurityPermission>(entity =>
            {
                entity.ToTable("n");

                entity.HasKey(e => new {e.SecurityGroupId, e.SecurityPermissionId});

                entity.Property(e => e.SecurityGroupId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.SecurityPermissionId)
                    .IsRequired()
                    .ValueGeneratedNever();
            });
        }
    }
}