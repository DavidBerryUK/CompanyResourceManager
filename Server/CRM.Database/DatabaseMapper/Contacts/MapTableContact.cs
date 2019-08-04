using System;
using System.Diagnostics.CodeAnalysis;
using CRM.Database.DatabaseMapper.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper.Contacts
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableContact : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<Models.Database.Contacts.Contact>(entity =>
            {
                entity.ToTable("Contact");

                entity.HasKey(e => e.ContactId);

                entity.Property(e => e.ContactId)
                    .ValueGeneratedNever();

                entity.Property(e => e.ContactId)
                    .IsRequired();

                entity.Property(e => e.ContactTypeId)
                    .IsRequired();

                entity.Property(e => e.ContactGroupId)
                    .IsRequired();

                entity.Property(e => e.Value)
                    .IsRequired()
                    .HasMaxLength(250);

                entity.Property(e => e.IsActive)
                    .IsRequired();

                entity.Ignore(o => o.PrimaryKey);
            });
        }
    }
}
