USE [CRM]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[SecurityGroupPerson](
	[SecurityGroupId]	[UNIQUEIDENTIFIER]	NOT NULL,	
	[PersonId]			[UNIQUEIDENTIFIER]	NOT NULL,
	)  ON [PRIMARY]
GO

-- Create Primary Key
--
ALTER TABLE dbo.SecurityGroupPerson ADD CONSTRAINT
	PK_SecurityGroupPerson PRIMARY KEY CLUSTERED 
	(	
		SecurityGroupId,
		PersonId
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO

-- Add foreign keys
--
ALTER TABLE dbo.SecurityGroupPerson ADD CONSTRAINT
	FK_SecurityGroupPerson_Person FOREIGN KEY
	(
		PersonId
	) REFERENCES dbo.Person
	(
		PersonId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO

ALTER TABLE dbo.SecurityGroupPerson ADD CONSTRAINT
	FK_SecurityGroup_SecurityGroup FOREIGN KEY
	(
		SecurityGroupId
	) REFERENCES dbo.SecurityGroup
	(
		SecurityGroupId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO