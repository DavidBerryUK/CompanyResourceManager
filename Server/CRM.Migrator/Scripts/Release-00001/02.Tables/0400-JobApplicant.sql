USE [CRM]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[JobApplicant](
	[JobApplicantId]		[UNIQUEIDENTIFIER]	NOT NULL,
	[JobRoleId]				[UNIQUEIDENTIFIER]	NULL,
	[WorkflowInstanceId]	[UNIQUEIDENTIFIER]	UNIQUE NOT NULL,
	[Title]					[NVARCHAR](20)		NULL,
	[Forename]				[NVARCHAR](200)		NOT NULL,
	[MiddleNames]			[NVARCHAR](200)		NULL,
	[Surname]				[NVARCHAR](200)		NOT NULL,
	[ContactGroupId]		[uniqueidentifier]	NULL,
 CONSTRAINT [PK_JobApplicantId] PRIMARY KEY CLUSTERED 
(
	[JobApplicantId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] 

GO

ALTER TABLE JobApplicant ADD CONSTRAINT 
	FK_JobApplicant_WorkflowInstance
	FOREIGN KEY
	(
		WorkflowInstanceId
	)
	REFERENCES WorkflowInstance
	(
		WorkflowInstanceId
	)

GO


ALTER TABLE JobApplicant  ADD CONSTRAINT 
	FK_JobApplicant_ContactGroup FOREIGN KEY
	(
		ContactGroupId
	)
	REFERENCES ContactGroup
	(
		ContactGroupId
	)
GO