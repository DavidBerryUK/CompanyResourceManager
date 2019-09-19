using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Teams;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Database.DatabaseMapper.Teams
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTablePersonTeam : IDatabaseTableMapperConfig
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