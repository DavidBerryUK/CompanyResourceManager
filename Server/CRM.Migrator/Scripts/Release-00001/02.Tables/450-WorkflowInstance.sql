USE [CRM]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[WorkflowInstance] (
	[WorkflowInstanceId]	[UNIQUEIDENTIFIER]	NOT NULL,
	[WorkflowId]			[UNIQUEIDENTIFIER]	NOT NULL,
	[WorkflowNodeId]		[UNIQUEIDENTIFIER]	NOT NULL,		
	[CreatedByPersonId]		[UNIQUEIDENTIFIER]	NOT NULL,
	[CreatedDateTime]		[DateTime]			NOT NULL,

 CONSTRAINT [PK_WorkflowInstance] PRIMARY KEY CLUSTERED 
(
	[WorkflowInstanceId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE dbo.WorkflowInstance ADD CONSTRAINT
	FK_WorkflowInstance_WorkFlow FOREIGN KEY
	(
		WorkFlowId
	)
	REFERENCES dbo.WorkFlow
	(
		WorkFlowId
	) 
	ON UPDATE  NO ACTION 
	ON DELETE  NO ACTION 

GO

ALTER TABLE dbo.WorkflowInstance ADD CONSTRAINT
	FK_WorkflowInstance_WorkFlowNode FOREIGN KEY
	(
		WorkFlowNodeId
	)
	REFERENCES dbo.WorkFlowNode
	(
		WorkFlowNodeId
	) 
	ON UPDATE  NO ACTION 
	ON DELETE  NO ACTION 

GO

ALTER TABLE dbo.WorkflowInstance ADD CONSTRAINT
	FK_Person_WorkflowInstance FOREIGN KEY
	(
		CreatedByPersonId
	)
	REFERENCES dbo.Person
	(
		PersonId
	) 
	ON UPDATE  NO ACTION 
	ON DELETE  NO ACTION 

GO