using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Contacts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Database.DatabaseMapper.Contacts
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableContactValidation : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<ContactValidation>(entity =>
            {
                entity.ToTable("ContactValidation");

                entity.HasKey(e => e.ContactValidationId);

                entity.Property(e => e.ContactValidationId)
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.RegEx)
                    .HasMaxLength(500);

                entity.Property(e => e.IsDefault)
                    .IsRequired();

                entity.HasMany(many => many.NavContactTypes)
                    .WithOne(one => one.NavContactValidation)
                    .HasForeignKey(foreignKey => foreignKey.ContactValidationId);

                entity.Ignore(o => o.PrimaryKey);
            });
        }
    }
}