using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Workflow;
using Microsoft.EntityFrameworkCore;
using System;

namespace CRM.Database.DatabaseMapper.Workflows
{
    public class MapTableWorkflow : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<Workflow>(entity =>
            {
                entity.ToTable("Workflow");

                entity.HasKey(e => e.WorkflowId);

                entity.Property(e => e.WorkflowId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.WorkflowCategoryId)
                    .IsRequired();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(2000);

                entity.Property(e => e.IsActive)
                    .IsRequired();

                entity.HasMany(many => many.NavWorkflowNodes)
                    .WithOne(one => one.NavWorkflow)
                    .HasForeignKey(key => key.WorkflowId);

                entity.HasMany(many => many.NavWorkflowInstances)
                    .WithOne(one => one.NavWorkflow)
                    .HasForeignKey(key => key.WorkflowId);

            });
        }

    }
}
