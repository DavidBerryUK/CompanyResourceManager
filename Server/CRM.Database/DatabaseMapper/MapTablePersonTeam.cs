using System.Diagnostics.CodeAnalysis;
using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTablePersonTeam : IDatabaseTableMapperConfig
    {
        public void Map(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PersonTeam>(entity =>
            {
                entity.ToTable("PersonTeam");

                entity.HasKey(e => new {e.PersonId, e.TeamId});

                entity.Property(e => e.PersonId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.TeamId)
                    .IsRequired()
                    .ValueGeneratedNever();
            });
        }
    }
}
