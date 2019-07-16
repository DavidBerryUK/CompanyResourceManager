using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Workflow;
using Microsoft.EntityFrameworkCore;
using System;

namespace CRM.Database.DatabaseMapper.Workflows
{
    public class MapTableWorkflowCategory : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<WorkflowCategory>(entity =>
            {
                entity.ToTable("WorkflowCategory");

                entity.HasKey(e => e.WorkflowCategoryId);

                entity.Property(e => e.WorkflowCategoryId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(2000);

                entity.Property(e => e.IsActive)
                    .IsRequired();

                entity.HasMany(many => many.NavWorkflows)
                    .WithOne(one => one.NavWorkflowCategory)
                    .HasForeignKey(key => key.WorkflowCategoryId);
            });
        }
    }
}
