using System;
using CRM.Database.DatabaseMapper.Interfaces;
using CRM.Models.Database.Workflow;
using Microsoft.EntityFrameworkCore;

namespace CRM.Database.DatabaseMapper.Workflows
{
    public class MapTableWorkflowInstanceEvent : IDatabaseTableMapperConfig
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

            modelBuilder.Entity<WorkflowInstanceEvent>(entity =>
            {
                entity.ToTable("WorkflowInstanceEvent");

                entity.HasKey(e => e.WorkflowInstanceEventId);

                entity.Property(e => e.WorkflowInstanceEventId)
                    .IsRequired()
                    .ValueGeneratedNever();

                entity.Property(e => e.WorkflowInstanceId)
                    .IsRequired();

                entity.Property(e => e.PersonId)
                    .IsRequired();

                entity.Property(e => e.CreatedDateTime)
                    .IsRequired();
            });
        }
    }
}