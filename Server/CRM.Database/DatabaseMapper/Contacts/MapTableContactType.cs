using System;
using System.Diagnostics.CodeAnalysis;
using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Contacts;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper.Contacts
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableContactType : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<ContactType>(entity =>
            {
                entity.ToTable("ContactType");

                entity.HasKey(e => e.ContactTypeId);

                entity.Property(e => e.ContactTypeId)
                    .ValueGeneratedNever();

                entity.Property(e => e.ContactTypeId)
                    .IsRequired();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(20);

                entity.Property(e => e.IsActive)
                    .IsRequired();

                entity.Property(e => e.ContactValidationId)
                    .IsRequired();

                entity.HasMany(many => many.NavContacts)
                    .WithOne(one => one.NavContactType)
                    .HasForeignKey(foreignKey => foreignKey.ContactTypeId);

                entity.Ignore(o => o.PrimaryKey);
            });
        }
    }
}