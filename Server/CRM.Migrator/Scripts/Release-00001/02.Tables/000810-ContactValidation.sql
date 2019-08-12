﻿USE [CRM]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[ContactValidation](
	[ContactValidationId]	[UNIQUEIDENTIFIER]	NOT NULL,
	[Name]					[NVARCHAR](20)		NOT NULL,
	[RegEx]					[NVARCHAR](500)		NOT NULL,
	[IsDefault]				[BIT]				NOT NULL,
 CONSTRAINT [PK_ContactValidation] PRIMARY KEY CLUSTERED 
(
	[ContactValidationId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY] 

GO
