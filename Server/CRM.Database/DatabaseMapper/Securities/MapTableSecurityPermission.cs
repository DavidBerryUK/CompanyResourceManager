using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Security;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Database.DatabaseMapper.Securities
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableSecurityPermission : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<SecurityPermission>(entity =>
            {
                entity.ToTable("SecurityPermission");

                entity.HasKey(e => e.SecurityPermissionId);

                entity.Property(e => e.SecurityPermissionId)
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

                entity.Property(e => e.BitGroup)
                    .IsRequired();

                entity.Property(e => e.Bit)
                    .IsRequired();

                entity.HasMany(many => many.NavSecurityGroupSecurityPermissions)
                    .WithOne(one => one.NavSecurityPermission)
                    .HasForeignKey(foreignKey => foreignKey.SecurityPermissionId);
            });
        }
    }
}