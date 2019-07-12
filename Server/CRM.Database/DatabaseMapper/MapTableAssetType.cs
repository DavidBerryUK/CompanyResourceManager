using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper
{
    public class MapTableAssetType : IDatabaseTableMapperConfig
    {
        public void Map(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<AssetType>(entity =>
            {
                entity.ToTable("AssetTypeSummary");

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
