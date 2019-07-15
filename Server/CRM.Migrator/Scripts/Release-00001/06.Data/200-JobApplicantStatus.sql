USE [CRM]
GO

SET NOCOUNT ON

INSERT INTO JobApplicantStatus
(JobApplicantStatusId							,Name							,Description									,IsActive)						VALUES
('A3B6903D-5446-4029-A1F3-1BC5E980C573'			,'Awaiting CV'					,'Waiting for applicant to send their CV'		,1),
('BA502D9C-FE51-4BE3-BE22-C98E90091A17'			,'Review CV'					,'Assign CV to be reviewed and assessed'		,1),
('7E7234C9-5CA2-4B0F-B37D-4E62C51219AF'			,'Send Technical Test'			,'Send Technical Test'							,1),
('5A2EF32F-4B99-4AF5-82DF-348B1DCB635F'			,'Await Technical Test'			,'Awaiting Technical Test to be returned'		,1),
('C524A320-8B21-42CD-A274-BB81A86BE8B1'			,'Review Technical Test'		,'Assign Technical Test to be reviewed'			,1),
('7822C742-E6CA-4CD0-B866-38CFF720D6E2'			,'Schedule Phone Interview'		,'Arrange a time for a Phone Interview'			,1),
('5EF80C2E-F700-4C7A-870D-682512BBBCFE'			,'Phone Interview Pending'		,'Phone Interview has been arranged'			,1),
('9B4C76B2-DF14-4C4F-85F5-122A7ECD3E7E'			,'Review Phone Interview'		,'Assess phone interview'						,1),
('C1AE6EBA-A78F-45BD-AC2C-9FF766299C11'			,'Schedule 1st F2F Interview'	,'Schedule the first F2F interview'				,1),
('68D30052-E36F-4E40-A953-6F6980A2EC87'			,'Await 1st F2F Interview'		,'Await the first F2F interview'				,1),
('05CD33A5-3BD9-4C57-B671-B5BA915F7331'			,'Review 1st F2F Interview'		,'Assess results of first F2F interview'		,1),
('14572A99-9B84-42FC-A571-7BA2622ECCFF'			,'Arrange Final Interview'		,'Arrange date and time for final interview'	,1),
('98911465-BD63-4191-AAB5-BE9EA7BD3E65'			,'Await Interview'				,'Await Interview'								,1),
('2D0980A3-B3C6-4C76-9B28-8EED01F5A03C'			,'Review Final Interview'		,'Review Final Interview'						,1),
('39ED72C6-C27C-4E07-9F66-F8AB20481180'			,'Offer Made'					,'Offer made, awaiting response'				,1),
('AB60FC39-AC14-4145-B300-7A9DA0FEA02B'			,'Rejected'						,'Rejected'										,1)

GO