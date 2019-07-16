USE [CRM]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[WorkflowInstanceEvent] (
	[WorkflowInstanceEventId]	[UNIQUEIDENTIFIER]	NOT NULL,
	[WorkflowInstanceId]		[UNIQUEIDENTIFIER]	NOT NULL,		
	[PersonId]					[UNIQUEIDENTIFIER]	NOT NULL,
	[CreatedDateTime]			[DATETIME]			NOT NULL,
	[Comments]					[NVARCHAR](2000)	NOT NULL,

 CONSTRAINT [PK_WorkflowInstanceEvent] PRIMARY KEY CLUSTERED 
(
	[WorkflowInstanceEventId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE dbo.WorkflowInstanceEvent ADD CONSTRAINT
	FK_WorkflowInstance_WorkflowInstanceEvent FOREIGN KEY
	(
		WorkflowInstanceId
	)
	REFERENCES dbo.WorkflowInstance
	(
		WorkflowInstanceId
	) 
	ON UPDATE  NO ACTION 
	ON DELETE  NO ACTION 

GO

ALTER TABLE dbo.WorkflowInstanceEvent ADD CONSTRAINT
	FK_Person_WorkflowInstanceEvent FOREIGN KEY
	(
		PersonId
	)
	REFERENCES dbo.Person
	(
		PersonId
	) 
	ON UPDATE  NO ACTION 
	ON DELETE  NO ACTION 

GO