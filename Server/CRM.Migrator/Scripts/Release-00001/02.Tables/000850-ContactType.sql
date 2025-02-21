﻿USE [CRM]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ContactType](
	[ContactTypeId]			[UNIQUEIDENTIFIER]	NOT NULL,
	[ContactValidationId]	[UNIQUEIDENTIFIER]	NOT NULL,
	[Name]					[NVARCHAR](20)		NOT NULL,
	[IsActive]				[BIT]				NOT NULL,
 CONSTRAINT [PK_ContactType] PRIMARY KEY CLUSTERED 
(
	[ContactTypeId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] 

GO

ALTER TABLE dbo.ContactType ADD CONSTRAINT
	FK_ContactType_ContactValidation FOREIGN KEY
	(
		ContactValidationId
	)
	REFERENCES dbo.ContactValidation
	(
		ContactValidationId
	) 
	ON UPDATE  NO ACTION 
	ON DELETE  NO ACTION 

GO
