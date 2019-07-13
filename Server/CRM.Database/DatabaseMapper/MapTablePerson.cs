using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper
{
    public class MapTablePerson : IDatabaseTableMapperConfig
    {
        public void Map(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Person>(entity =>
            {
                entity.ToTable("Person");

                entity.HasKey(e => e.PersonId);

                entity.Property(e => e.PersonId)
                    .ValueGeneratedNever();

                entity.Property(e => e.Forename)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Surname)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.IsActive)
                    .IsRequired();

                entity.HasMany(many => many.NavPersonAssets)
                    .WithOne(one => one.NavPerson)
                    .HasForeignKey(foreignKey => foreignKey.PersonId);

                entity.HasMany(many => many.NavPersonTeams)
                    .WithOne(one => one.NavPerson)
                    .HasForeignKey(foreignKey => foreignKey.PersonId);

                entity.HasMany(many => many.NavPersonSkills)
                    .WithOne(one => one.NavPerson)
                    .HasForeignKey(foreignKey => foreignKey.PersonId);

                entity.HasMany(many => many.NavSecurityGroupPerson)
                    .WithOne(one => one.NavPerson)
                    .HasForeignKey(foreignKey => foreignKey.PersonId);

            });
        }
    }
}
