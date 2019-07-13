using System.Diagnostics.CodeAnalysis;
using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableAsset : IDatabaseTableMapperConfig
    {
        public void Map(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Asset>(entity =>
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
            });
        }
    }
}
