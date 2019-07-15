﻿USE [CRM]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[JobApplicantAction] (
	[JobApplicantActionId]	[UNIQUEIDENTIFIER]	NOT NULL,
	[JobApplicantStatusId]	[UNIQUEIDENTIFIER]	NOT NULL,
	[Name]					[NVARCHAR](100)		NOT NULL,	
	[Description]			[NVARCHAR](2000)	NOT NULL,
	[DisplayOrder]			[INT]				NOT NULL,
	[IsActive]				[BIT]				NOT NULL,

 CONSTRAINT [PK_JobApplicantAction] PRIMARY KEY CLUSTERED 
(
	[JobApplicantActionId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE dbo.JobApplicantAction ADD CONSTRAINT
	FK_JobApplicantAction_JobApplicantStatus FOREIGN KEY
	(
		JobApplicantStatusId
	)
	REFERENCES dbo.JobApplicantStatus
	(
		JobApplicantStatusId
	) 
	ON UPDATE  NO ACTION 
	ON DELETE  NO ACTION 

GO