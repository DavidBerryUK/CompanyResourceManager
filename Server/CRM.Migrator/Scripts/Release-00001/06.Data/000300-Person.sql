﻿USE [CRM]
GO

SET NOCOUNT ON


INSERT INTO Person 
(PersonId								, Forename	,Surname		,Email										,JobRoleId									,IsActive)		VALUES
('f67f6120-a54e-4dcc-9afe-a4d01f1c4e0f'	,'Adam'		,'Johnson'		,'adam.johnson@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('9130819a-5d68-4103-a5fc-a6bf059f5928'	,'Adam'		,'Kendal'		,'adam.kendal@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('93418C59-B958-4C2B-919F-811AE06717C6'	,'Adrian'	,'Moody'		,'adrian.moody@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,0),
('b0705c9d-9510-4a6d-9ba5-c98ccbf41a1c'	,'Anthony'	,'Blackwood'	,'aj.blackwood@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,0),
('b89ca22e-6819-4081-976c-641e7d03c630'	,'Alex'		,'Jenkins'		,'alex.jenkins@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('f0f96a0c-228e-4d30-91a2-513cd745b8f9'	,'Anand'	,'Moorhead'		,'anand.moorhead@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('2c6e607d-580a-4901-b2e5-b00b3af7d6c2'	,'Andy'	    ,'Whitehouse'	,'anders.whitehouse@axium.co.uk'	,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('b770ecea-7443-40eb-9178-6ca6e8676dc8'	,'Andrew'	,'Large'		,'andrew.large@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('e7472380-cba7-4e6c-8e4e-49e554e8ee4f'	,'Andy'		,'Barlow'		,'andy.barlow@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('4cd8edf2-9706-410a-b2ec-5106b25f85ec'	,'Andy'		,'Carter'		,'andy.carter@axium.co.uk'			,'0CE32D25-FE8C-4F8B-8B24-2F5D10D5B1DB'		,1),
('b221a755-c117-4fb9-bc04-e77e008012ef'	,'Andrew'	,'Cox'			,'asad.cox@axium.co.uk'				,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('6fb91661-45ef-4a2b-a108-12a60a0bb4ff'	,'Ashley'	,'Brightman'	,'ashley.brightman@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('c54bcac9-6c14-4550-9165-ab96fdbc54e6'	,'Brendan'	,'Statham'		,'brendan.statham@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('ffa830fd-6b6d-4081-9c0c-bc19e1c99e98'	,'Damon'	,'Hunt'			,'damon.hunt@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('b0d1f4e1-a882-4e51-823f-fdb831be6671'	,'Daniel'	,'Craig'		,'daniel.craig@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('31c09ea3-c925-4614-bdb0-0013e1963c64'	,'Danielle'	,'Attenbrough'	,'danielle.attenbrough@axium.co.uk'	,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('326f4b79-a524-4190-9524-f682e0aacb0e'	,'Dave'		,'Berry'		,'dave.berry@axium.co.uk'			,'6836B0A6-7648-48F0-8E79-0BC72DCE07BE'		,1),
('5773ab55-d98d-477b-87e8-e7b7767ff265'	,'Den'		,'Stalone'		,'deiniol.stalone@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('9faf76d2-0248-4555-88ca-fe4f6b88a235'	,'Edward'	,'Anderson'		,'ed.anderson@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('4c7eb53b-704a-4825-919f-361884afd616'	,'Emma'		,'Jackson'		,'emma.jackson@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('09488cad-32c4-4dc0-b089-0b1c07bd3f4e'	,'Gary'		,'Sugar'		,'gary.sugar@axium.co.uk'			,'96914202-DD26-4774-B9FF-FF628DBFB08E'		,1),
('00753b9c-b6a7-4e66-ba08-4f02d5f3a4e9'	,'Geoff'	,'Bowers'		,'geoff.bowers@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('f2ac8484-d61f-4403-84e4-fae3ac6bbe33'	,'Harvey'	,'Jackson'		,'harvey.jackson@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('1f0d1e71-ef7c-4804-b71c-f77a2a07ea22'	,'Hayden'	,'White'		,'hayden.white@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('994b7dd7-83f2-4355-b8d7-e119df917324'	,'Imran'	,'Patterson'	,'imran.peterson@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('0d05d12f-c5d6-49ea-9278-ba22ed08e596'	,'Jake'		,'o''Neil'		,'jake.oneil@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('2368f4b6-1ca7-43f8-8e78-9cc9b4234a7e'	,'James'	,'Charles'		,'james.charles@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('47c8f431-1a24-411d-bea8-d1d515d5090e'	,'James'	,'Pierce'		,'james.pierce@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('08009b0f-998a-4758-abcc-b22b3a18e34b'	,'Joe'		,'Duncan'		,'joe.duncan@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('ee99a4b5-4873-44dd-9ab2-24e104da8074'	,'John'		,'Casey'		,'john.casey@axium.co.uk'			,'B82945CD-76FD-46EF-BF25-8E8372F13E49'		,1),
('53f2514f-3fe5-4914-9030-208ec6bbabdb'	,'Jon'		,'Butler'		,'jon.butler@axium.co.uk'			,'6836B0A6-7648-48F0-8E79-0BC72DCE07BE'		,1),
('31f8a209-45e6-45f8-9a2c-0faa675134cf'	,'Jonathan'	,'Rayes'		,'jonathan.rayes@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('1e056126-e032-4511-9668-285320f23b99'	,'Jordan'	,'Miller'		,'jordan.miller@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('a111a020-15a0-489a-b9ab-3963d716549a'	,'Josh'		,'Mercer'		,'kris.mercer@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('c5098ce2-2eb7-4984-8b08-dbac1a7dbb58'	,'Liam'		,'Arnold'		,'liam.arnold@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('8a056b73-1a7c-4af4-a50d-207b5f714057'	,'Lionel'	,'Stone'		,'lionel.stone@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('ffd1a2a8-ae56-469a-bb26-eec04f5a80e8'	,'Luis'		,'Wilcox'		,'luis.wilcox@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('6332fec4-f93e-43e3-b583-788db3fa93e0'	,'Luis'		,'Meadows'		,'luis.meadows@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('7a75fa43-aca4-41cd-92e7-36214e9b9e36'	,'Luisa'	,'Snow'			,'luisa.snow@axium.co.uk'			,'8DA63FAA-DA87-4FAF-BFCE-80F24FA2A29C'		,1),
('bd47a9b5-70b2-408c-9768-9f3a870e454c'	,'Luke'		,'Griffith'		,'luke.griffith@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('ddfd1149-ce8d-42f6-8de8-10b9b5973c62'	,'Malwina'	,'Parsons'		,'malwina.parsons@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('41ce3f58-77de-4bac-bd77-2897851fdbc0'	,'Marios'	,'Richards'		,'marios.richards@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('43a69df7-7fbd-44ec-8342-8feaa8fb9c19'	,'Martin'	,'Lawrence'		,'martin.lawrence@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('ca9c7ea8-1cf5-44e3-8501-7e8a57894386'	,'Mateusz'	,'Hobbs'		,'mateusz.hobs@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('d7f42de6-5ce7-4d6f-8d06-9b11310d35e3'	,'Matt'		,'Johnston'		,'matt.johnson@axium.co.uk'			,'8DA63FAA-DA87-4FAF-BFCE-80F24FA2A29C'		,1),
('9e349d76-845b-4ff8-9522-fd4cc0ae2389'	,'Mike'		,'Lott'			,'mike.lott@axium.co.uk'			,'B82945CD-76FD-46EF-BF25-8E8372F13E49'		,1),
('dc8e9d94-4722-4b29-8f24-f25d5bae2aaf'	,'Nigel'	,'Colby'		,'nigel.colby@axium.co.uk'			,'5DBE338B-9BF7-482E-A4C9-AC3D621C7E46'		,1),
('9fce8854-9e44-47ca-92d0-2aa55662ce2b'	,'Paul'		,'Weaver'		,'paul.weaver@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('fba0ee3a-0667-4673-b078-609885dcd4e8'	,'Phil'		,'Bolton'		,'phil.bolton@axium.co.uk'			,'8DA63FAA-DA87-4FAF-BFCE-80F24FA2A29C'		,1),
('f7789c85-5ea8-41c5-bcf7-f8b35cbe569b'	,'Ravi'		,'Dorsey'		,'ravi.dorsey@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('dd5e471e-a1e8-4d6f-a4d6-24512f695da7'	,'Richard'	,'Rivera'		,'richard.rivera@axium.co.uk'		,'5DBE338B-9BF7-482E-A4C9-AC3D621C7E46'		,1),
('58ac100c-4670-40c5-ba42-cb520e746c9b'	,'Reg'		,'Morgan'		,'reg.morgan@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('cec57a98-9df3-467c-a4e9-b4ce16398b21'	,'Richard'	,'Myers'		,'richard.myers@axium.co.uk'		,'5DBE338B-9BF7-482E-A4C9-AC3D621C7E46'		,1),
('e9b3f481-c593-405e-aead-f113d6fe189c'	,'Richard'	,'Sawyer'		,'richard.sawyer@axium.co.uk'		,'5DBE338B-9BF7-482E-A4C9-AC3D621C7E46'		,1),
('5c3fc7e7-8946-4e7e-8ce7-2a952f12ee61'	,'Rowell'	,'Stuart'		,'rowell.stuart@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('b77faa6e-08e0-403f-985f-4e07112b1b09'	,'Saurabh'	,'Knox'			,'saurabh.knox@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('2b674eb1-88ba-41f6-8f8e-7ca333d9d7de'	,'Selena'	,'McCullough'	,'selena.mccullough@axium.co.uk'	,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('c9d00594-c793-4354-8ad1-d6c434bbef28'	,'Selena'	,'Walsh'		,'selena.walsh@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('3504c989-202c-4cee-a095-7b868ff5977b'	,'Stelios'	,'Hines'		,'stelios.hines@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('8c68d0f0-bf9d-4c04-b36b-a44d2c264642'	,'Tessa'	,'Brennan'		,'tessa.brennan@axium.co.uk'		,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('3493922f-6e41-4768-8071-e09fe34f3900'	,'Will'		,'Manning'		,'will.manning@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1),
('43531ac0-4ccf-4f35-8f4a-e1b52d12c97d'	,'Yorke'	,'Bean'			,'yorke.bean@axium.co.uk'			,'C20DDE81-9430-4E33-B410-9856409935E3'		,1)

GO


INSERT INTO CONTACTGROUP 
(ContactGroupId							,PreferredContactId	,IsActive	, Notes) VALUES
('326f4b79-a524-4190-9524-f682e0aacb0e'	,NULL				,1			,NULL)

GO

INSERT INTO CONTACT
(ContactId								,ContactGroupId							,ContactTypeId							,Value					,IsActive) VALUES
('F4FBCD77-46DC-4693-97C0-3205EECA63CA'	,'326f4b79-a524-4190-9524-f682e0aacb0e'	,'C613AB3C-6DEA-4C47-A747-0C533003ACB5'	,'0113 39202013'		,1),
('7B05805C-8833-48BE-BD98-AD2B2C3AEFFF'	,'326f4b79-a524-4190-9524-f682e0aacb0e'	,'AA2FE7D2-79A4-4DCE-A16B-796B82AAD34C'	,'Dave.Berry@Work.com'	,1),
('F38626DE-9EE4-47A0-8C32-9A91DD571799'	,'326f4b79-a524-4190-9524-f682e0aacb0e'	,'6F00F977-9720-4990-842C-373FD990D576'	,'Dave@Home.com'		,1)

GO
