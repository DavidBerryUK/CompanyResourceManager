using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Assets;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Database.DatabaseMapper.Assets
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableAssetType : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<AssetType>(entity =>
            {
                entity.ToTable("AssetType");

                entity.HasKey(e => e.AssetTypeId);

                entity.Property(e => e.AssetTypeId)
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(200);

                entity.Property(e => e.HasAssetBadge)
                    .IsRequired();

                entity.Property(e => e.HasOperatingSystem)
                    .IsRequired();

                entity.HasMany(many => many.NavAssets)
                    .WithOne(one => one.NavAssetType)
                    .HasForeignKey(key => key.AssetTypeId);
            });
        }
    }
}
