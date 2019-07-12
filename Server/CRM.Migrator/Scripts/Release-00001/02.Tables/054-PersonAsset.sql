USE [CRM]
GO


SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

-- Create Table
--
CREATE TABLE dbo.PersonAsset
	(
		PersonId uniqueidentifier NOT NULL,
		AssetId uniqueidentifier NOT NULL
	)  ON [PRIMARY]
GO

-- Create Primary Key
--
ALTER TABLE dbo.PersonAsset ADD CONSTRAINT
	PK_PersonAsset PRIMARY KEY CLUSTERED 
	(
	PersonId,
	AssetId
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO

-- Add foreign keys
--
ALTER TABLE dbo.PersonAsset ADD CONSTRAINT
	FK_PersonAsset_Asset FOREIGN KEY
	(
	AssetId
	) REFERENCES dbo.Asset
	(
	AssetId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO
ALTER TABLE dbo.PersonAsset ADD CONSTRAINT
	FK_PersonAsset_Person FOREIGN KEY
	(
	PersonId
	) REFERENCES dbo.Person
	(
	PersonId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 

GO