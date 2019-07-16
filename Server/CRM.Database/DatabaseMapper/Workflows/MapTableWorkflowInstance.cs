using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Workflow;
using Microsoft.EntityFrameworkCore;
using System;

namespace CRM.Database.DatabaseMapper.Workflows
{
    public class MapTableWorkflowInstance : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<WorkflowInstance>(entity =>
            {
                entity.ToTable("WorkflowInstance");

                entity.HasKey(e => e.WorkflowInstanceId);

                entity.Property(e => e.WorkflowInstanceId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.WorkflowId)
                    .IsRequired();

                entity.Property(e => e.WorkflowNodeId)
                    .IsRequired();

                entity.Property(e => e.CreatedDateTime)
                    .IsRequired();

                entity.HasMany(many => many.NavWorkflowInstanceEvents)
                    .WithOne(one => one.NavWorkflowInstance)
                    .HasForeignKey(key => key.WorkflowInstanceId);
            });
        }
    }
}
