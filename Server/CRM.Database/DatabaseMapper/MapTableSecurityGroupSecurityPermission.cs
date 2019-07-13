using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper
{
    public class MapTableSecurityGroupSecurityPermission : IDatabaseTableMapperConfig
    {
        public void Map(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SecurityGroupSecurityPermission>(entity =>
            {
                entity.ToTable("n");

                entity.HasKey(e => new {e.SecurityGroupId, e.SecurityPermissionId});

                entity.Property(e => e.SecurityGroupId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.SecurityPermissionId)
                    .IsRequired()
                    .ValueGeneratedNever();
            });
        }
    }
}
