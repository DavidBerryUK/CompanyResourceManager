USE [CRM]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- Create Table
--
CREATE TABLE dbo.PersonSkill
	(
		PersonId uniqueidentifier NOT NULL,
		SkillId uniqueidentifier NOT NULL
	)  ON [PRIMARY]
GO

-- Create Primary Key
--
ALTER TABLE dbo.PersonSkill ADD CONSTRAINT
	PK_PersonSkill PRIMARY KEY CLUSTERED 
	(
	PersonId,
	SkillId
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO

-- Add foreign keys
--
ALTER TABLE dbo.PersonSkill ADD CONSTRAINT
	FK_PersonSkill_Skill FOREIGN KEY
	(
		SkillId
	) 
	REFERENCES dbo.Skill
	(
		SkillId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO

ALTER TABLE dbo.PersonSkill ADD CONSTRAINT
	FK_PersonSkill_Person FOREIGN KEY
	(
		PersonId
	) REFERENCES dbo.Person
	(
		PersonId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO

