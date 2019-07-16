using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Workflow;
using Microsoft.EntityFrameworkCore;
using System;

namespace CRM.Database.DatabaseMapper.Workflows
{
    public class MapTableWorkflowAction : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<WorkflowAction>(entity =>
            {
                entity.ToTable("WorkflowAction");

                entity.HasKey(e => new { e.WorkflowActionId });

                entity.Property(e => e.WorkflowActionId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.WorkflowNodeId)
                    .IsRequired();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(2000);

                entity.Property(e => e.DisplayOrder)
                    .IsRequired();

                entity.Property(e => e.IsActive)
                    .IsRequired();
            });
        }
    }
}
