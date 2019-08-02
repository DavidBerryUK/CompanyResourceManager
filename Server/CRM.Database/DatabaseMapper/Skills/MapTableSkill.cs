using CRM.Database.DatabaseMapper.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Database.DatabaseMapper.Skills
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableSkill : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<Models.Database.Skills.Skill>(entity =>
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

                entity.Ignore(o => o.PrimaryKey);
            });
        }
    }
}
