﻿USE [CRM]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[WorkflowCategory] (
	[WorkflowCategoryId]	[UNIQUEIDENTIFIER]	NOT NULL,
	[Name]					[NVARCHAR](100)		NOT NULL,	
	[Description]			[NVARCHAR](2000)	NOT NULL,
	[IsActive]				[BIT]				NOT NULL,

 CONSTRAINT [PK_WorkflowCategory] PRIMARY KEY CLUSTERED 
(
	[WorkflowCategoryId] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON) ON [PRIMARY]
) ON [PRIMARY]

GO
