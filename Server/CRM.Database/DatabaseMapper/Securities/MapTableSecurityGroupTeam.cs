using System;
using System.Diagnostics.CodeAnalysis;
using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Security;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper.Securities
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableSecurityGroupTeam : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<SecurityGroupTeam>(entity =>
            {
                entity.ToTable("SecurityGroupTeam");

                entity.HasKey(e => new {e.SecurityGroupId, e.TeamId});

                entity.Property(e => e.SecurityGroupId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.TeamId)
                    .IsRequired()
                    .ValueGeneratedNever();
            });
        }
    }
}