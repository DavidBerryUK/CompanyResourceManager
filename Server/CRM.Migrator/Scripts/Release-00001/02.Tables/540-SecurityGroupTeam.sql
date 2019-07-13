USE [CRM]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[SecurityGroupTeam](
	[SecurityGroupId]	[UNIQUEIDENTIFIER]	NOT NULL,	
	[TeamId]			[UNIQUEIDENTIFIER]	NOT NULL,
	)  ON [PRIMARY]
GO

-- Create Primary Key
--
ALTER TABLE dbo.SecurityGroupTeam ADD CONSTRAINT
	PK_SecurityGroupTeam PRIMARY KEY CLUSTERED 
	(	
		SecurityGroupId,
		TeamId
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO

-- Add foreign keys
--
ALTER TABLE dbo.SecurityGroupTeam ADD CONSTRAINT
	FK_SecurityGroupTeam_Team FOREIGN KEY
	(
		TeamId
	) REFERENCES dbo.Team
	(
		TeamId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO

ALTER TABLE dbo.SecurityGroupTeam ADD CONSTRAINT
	FK_SecurityGroupTeam_SecurityGroup FOREIGN KEY
	(
		SecurityGroupId
	) REFERENCES dbo.SecurityGroup
	(
		SecurityGroupId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO