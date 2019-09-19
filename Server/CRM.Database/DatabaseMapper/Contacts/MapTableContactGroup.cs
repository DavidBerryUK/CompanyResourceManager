using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Contacts;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Database.DatabaseMapper.Contacts
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableContactGroup : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<ContactGroup>(entity =>
            {
                entity.ToTable("ContactGroup");

                entity.HasKey(e => e.ContactGroupId);

                entity.Property(e => e.ContactGroupId)
                    .ValueGeneratedNever();

                entity.Property(e => e.PreferredContactId)
                    .IsRequired(false);

                entity.Property(e => e.Notes)
                    .IsRequired(false)
                    .HasMaxLength(500);

                entity.Property(e => e.IsActive)
                    .IsRequired();

                entity.HasMany(many => many.NavContacts)
                    .WithOne(one => one.NavContactGroup)
                    .HasForeignKey(foreignKey => foreignKey.ContactGroupId);

                entity.Ignore(o => o.PrimaryKey);
            });
        }
    }
}