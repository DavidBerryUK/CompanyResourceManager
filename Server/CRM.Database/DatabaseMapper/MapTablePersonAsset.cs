using System.Diagnostics.CodeAnalysis;
using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTablePersonAsset : IDatabaseTableMapperConfig
    {
        public void Map(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PersonAsset>(entity =>
            {
                entity.ToTable("PersonAsset");

                entity.HasKey(e => new {e.PersonId, e.AssetId});

                entity.Property(e => e.PersonId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.AssetId)
                    .IsRequired()
                    .ValueGeneratedNever();
            });
        }
    }
}
