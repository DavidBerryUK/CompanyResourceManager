using System.Diagnostics.CodeAnalysis;
using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableSkill : IDatabaseTableMapperConfig
    {
        public void Map(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Skill>(entity =>
            {
                entity.ToTable("Skill");

                entity.HasKey(e => e.SkillId);

                entity.Property(e => e.SkillId)
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

                entity.HasMany(many => many.NavPersonSkills)
                    .WithOne(one => one.NavSkill)
                    .HasForeignKey(foreignKey => foreignKey.SkillId);
            });
        }
    }
}
