USE [CRM]
GO

SET NOCOUNT ON

INSERT INTO ContactValidation
([ContactValidationId]						,[Name]				,[RegEx],	[IsDefault]			) VALUES
('574DA654-7A7B-4817-9499-EFFB79BC84FE'		,'Text'				,''																		,1),
('BB2760FE-8639-46AB-A5E1-86BEEDD802E9'		,'UK Phone Number'	,'^(?:(\+?\d{1,3}) )?(?:([\(]?\d+[\)]?)[ -])?(\d{1,5}[\- ]?\d{1,5})$'	,0),
('5A9BEBC1-C4E9-4719-B941-CAE8EB326677'		,'UK Mobile Number'	,'^(\+44\s?7\d{3}|\(?07\d{3}\)?)\s?\d{3}\s?\d{3}$'						,0),
('5453F40C-A93C-48AB-989E-D2B736F115F4'		
,'Email Address'	,'([-!#-''*+/-9=?A-Z^-~]+(\.[-!#-''*+/-9=?A-Z^-~]+)*|"([]!#-[^-~ \t]|(\\[\t -~]))+")@[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?(\.[0-9A-Za-z]([0-9A-Za-z-]{0,61}[0-9A-Za-z])?)+',		1)