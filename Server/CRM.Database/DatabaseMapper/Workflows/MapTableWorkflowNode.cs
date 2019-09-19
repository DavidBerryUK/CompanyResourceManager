using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Workflow;
using Microsoft.EntityFrameworkCore;
using System;

namespace CRM.Database.DatabaseMapper.Workflows
{
    public class MapTableWorkflowNode : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<WorkflowNode>(entity =>
            {
                entity.ToTable("WorkflowNode");

                entity.HasKey(e => e.WorkflowNodeId);

                entity.Property(e => e.WorkflowNodeId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.WorkflowId)
                    .IsRequired();

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(100);

                entity.Property(e => e.Description)
                    .IsRequired()
                    .HasMaxLength(2000);

                entity.Property(e => e.IsActive)
                    .IsRequired();

                entity.HasMany(many => many.NavWorkflowInstances)
                    .WithOne(one => one.NavWorkFlowNode)
                    .HasForeignKey(key => key.WorkflowNodeId);

                entity.HasMany(many => many.NavWorkflowActions)
                    .WithOne(one => one.NavWorkFlowNode)
                    .HasForeignKey(key => key.WorkflowNodeId);
            });
        }
    }
}