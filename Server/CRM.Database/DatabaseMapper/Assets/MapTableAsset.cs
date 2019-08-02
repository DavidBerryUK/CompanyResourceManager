using CRM.Database.DatabaseMapper.Interfaces;
using Microsoft.EntityFrameworkCore;
using System;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Database.DatabaseMapper.Assets
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableAsset : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<Models.Database.Assets.Asset>(entity =>
            {
                entity.ToTable("Asset");

                entity.HasKey(e => e.AssetId);

                entity.Property(e => e.AssetId)
                    .ValueGeneratedNever();

                entity.Property(e => e.AssetTypeId)
                    .IsRequired();
                
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(2000);

                entity.HasMany(many => many.NavPersonAssets)
                    .WithOne(one => one.NavAsset)
                    .HasForeignKey(foreignKey => foreignKey.AssetId);

                entity.Ignore(o => o.PrimaryKey);
            });
        }
    }
}
