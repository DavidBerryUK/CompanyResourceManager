USE [CRM]
GO


SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Person] (
	[PersonId]	[uniqueidentifier]	NOT NULL,
	[JobRoleId] [uniqueidentifier]	NOT NULL,
	[Forename]	[nvarchar](200)		NOT NULL,
	[Surname]	[nvarchar](200)		NOT NULL,
	[Email]		[nvarchar](500)		NULL,
	[IsActive]	[bit]				NOT NULL,

 CONSTRAINT [PK_Person] PRIMARY KEY CLUSTERED 
(
	[PersonId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO

ALTER TABLE dbo.Person ADD CONSTRAINT
	FK_Person_JobRole FOREIGN KEY
	(
	JobRoleId
	) REFERENCES dbo.JobRole
	(
	JobRoleId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 

GO