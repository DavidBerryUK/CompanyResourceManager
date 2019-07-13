USE [CRM]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[SecurityGroupSecurityPermission](
	[SecurityGroupId]	[UNIQUEIDENTIFIER]	NOT NULL,
	[SecurityPermissionId]		[UNIQUEIDENTIFIER]	NOT NULL,
	)  ON [PRIMARY]
GO

-- Create Primary Key
--
ALTER TABLE dbo.SecurityGroupSecurityPermission ADD CONSTRAINT
	PK_SecurityGroupSecurityPermission PRIMARY KEY CLUSTERED 
	(
	SecurityGroupId,
	SecurityPermissionId
	) WITH( STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]

GO

-- Add foreign keys
--
ALTER TABLE dbo.SecurityGroupSecurityPermission ADD CONSTRAINT
	FK_SecurityGroupPermission_SecurityPermission FOREIGN KEY
	(
		SecurityPermissionId
	) REFERENCES dbo.SecurityPermission
	(
		SecurityPermissionId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO

ALTER TABLE dbo.SecurityGroupSecurityPermission ADD CONSTRAINT
	FK_SecurityGroupPermission_SecurityGroup FOREIGN KEY
	(
		SecurityGroupId
	) REFERENCES dbo.SecurityGroup
	(
		SecurityGroupId
	) ON UPDATE  NO ACTION 
	 ON DELETE  NO ACTION 
	
GO