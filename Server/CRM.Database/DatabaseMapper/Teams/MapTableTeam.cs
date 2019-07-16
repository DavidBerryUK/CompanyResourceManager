using CRM.Database.DatabaseMapper.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Database.DatabaseMapper.Teams
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableTeam : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<Models.Database.Teams.Team>(entity =>
            {
                entity.ToTable("Team");

                entity.HasKey(e => e.TeamId);

                entity.Property(e => e.TeamId)
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

                entity.HasMany(many => many.NavPersonTeams)
                    .WithOne(one => one.NavTeam)
                    .HasForeignKey(foreignKey => foreignKey.TeamId);

                entity.HasMany(many => many.NavSecurityGroupTeams)
                   .WithOne(one => one.NavTeam)
                   .HasForeignKey(foreignKey => foreignKey.TeamId);
            });
        }
    }
}
