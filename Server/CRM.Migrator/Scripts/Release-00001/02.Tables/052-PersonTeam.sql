USE [CRM]
GO


SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- Create Table
--
CREATE TABLE dbo.PersonTeam
	(
		PersonId uniqueidentifier NOT NULL,
		TeamId uniqueidentifier NOT NULL
	)  ON [PRIMARY]
GO

-- Create Primary Key
--
ALTER TABLE dbo.PersonTeam ADD CONSTRAINT
	PK_PersonTeam PRIMARY KEY CLUSTERED 
	(
	PersonId,
	TeamId
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO

-- Add foreign keys
--
ALTER TABLE dbo.PersonTeam ADD CONSTRAINT
	FK_PersonTeam_Skill FOREIGN KEY
	(
	TeamId
	) REFERENCES dbo.Team
	(
	TeamId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.PersonTeam ADD CONSTRAINT
	FK_PersonTeam_Person FOREIGN KEY
	(
	PersonId
	) REFERENCES dbo.Person
	(
	PersonId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 