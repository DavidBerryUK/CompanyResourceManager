using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper
{
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
