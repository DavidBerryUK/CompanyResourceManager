USE [CRM]
GO

SET NOCOUNT ON

USE [CRM]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

INSERT INTO SecurityGroup
(SecurityGroupId						,Name							,Description						,IsActive	) VALUES
('B2260114-BBFF-4BDF-9C8C-BDCAC2F5BF17'	,'System Administrator'			,'Access to system functions'		,1			),
('0BFB0854-C88B-4139-B58A-23116B9A1EF7'	,'Person Administrator'			,'High level access to edit people'	,1			),
('0936BF19-677B-4063-B35A-036270F226D0'	,'Security Administrator'		,'Access to administer all security',1			),
('346A61C8-2A05-49BC-BDEC-250A55998551'	,'Guest'						,'Guest Access (low permissions)'	,1			),
('FFC11325-7B8D-4D60-8A61-AA2FDB51E958'	,'Maintain Skills List'			,'Edit Skills Lists'				,1			),
('EEAD16BE-601C-4E29-AC1F-7D404C5B156C'	,'Maintain Job Roles List'		,'Edit Job Roles Lists'				,1			),
('633FD9C8-ED20-49C0-AEF6-4E86405D1FD9'	,'Maintain Asset Types List'	,'Edit Asset Types Lists'			,1			),
('2F34A349-64AC-45E4-ABCA-96FFCBE9E9B9'	,'Maintain Assets List'			,'Edit Assets Lists'				,1			),
('6D6A9D90-718D-4E41-920A-B2FAB4F2AF3D'	,'Edit My Skills'				,'Edit My Skills'					,1			),
('0BF0490B-E5FD-46C3-BA7A-4834E5D942EC'	,'Edit My Job Role'				,'Edit My Job Roles'				,1			),
('702C211D-B777-4AEF-AFB6-40C7B0556645'	,'Edit My Assets'				,'Edit My Assets'					,1			)

GO
