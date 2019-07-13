using System.Diagnostics.CodeAnalysis;
using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableTeam : IDatabaseTableMapperConfig
    {
        public void Map(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Team>(entity =>
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
