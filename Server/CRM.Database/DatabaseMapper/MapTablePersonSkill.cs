using System.Diagnostics.CodeAnalysis;
using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTablePersonSkill : IDatabaseTableMapperConfig
    {
        public void Map(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PersonSkill>(entity =>
            {
                entity.ToTable("PersonSkill");

                entity.HasKey(e => new {e.PersonId, e.SkillId});

                entity.Property(e => e.PersonId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.SkillId)
                    .IsRequired()
                    .ValueGeneratedNever();
            });
        }
    }
}
