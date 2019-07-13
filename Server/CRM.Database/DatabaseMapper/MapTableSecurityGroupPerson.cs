using System.Diagnostics.CodeAnalysis;
using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    public class MapTableSecurityGroupPerson : IDatabaseTableMapperConfig
    {
        public void Map(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<SecurityGroupPerson>(entity =>
            {
                entity.ToTable("SecurityGroupPerson");

                entity.HasKey(e => new {e.PersonId, e.SecurityGroupId});

                entity.Property(e => e.PersonId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.SecurityGroupId)
                    .IsRequired()
                    .ValueGeneratedNever();
            });
        }
    }
}
