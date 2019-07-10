using CRM.Migrator.Services.Database;
using CRM.Migrator.Services.Database.Interfaces;
using CRM.Migrator.Services.ScriptAuditor.Interfaces;

namespace CRM.Migrator.Services.ScriptAuditor
{
    public class SetupAuditTableService : ISetupAuditTableService
    {
        private readonly IDatabaseHelperFactory _databaseHelperFactory;

        public SetupAuditTableService(IDatabaseHelperFactory databaseHelperFactory)
        {
            _databaseHelperFactory = databaseHelperFactory;
        }

        public void SetupAuditTable(string connectionName, string schemaName)
        {
            var databaseHelper = _databaseHelperFactory.Get(connectionName);

            if (databaseHelper.DoesTableExist(schemaName, "ScriptAudit") == false)
            {
                CreateScriptAuditTable(databaseHelper, schemaName);
            }
        }

        private void CreateScriptAuditTable(DatabaseHelper databaseHelper, string schemaName)
        {
            if (databaseHelper.DoesSchemaExist(schemaName) == false)
            {
                CreateSchema(databaseHelper, schemaName);
            }

            var sql = "";

            sql = sql + $"CREATE TABLE [{schemaName}].[ScriptAudit](";
            sql = sql + "	[ScriptId] [int] IDENTITY(1,1) NOT NULL,";
            sql = sql + "	[FullName] [nvarchar](500) NOT NULL,";
            sql = sql + "	[Name] [nvarchar](500) NOT NULL,";
            sql = sql + "	[Success] [bit] NOT NULL,";
            sql = sql + "	[Error] [nvarchar](max) NULL,";
            sql = sql + "	[ExecuteDateTime] [datetime] NULL,";
            sql = sql + " CONSTRAINT [PK_ScriptAudit] ";
            sql = sql + " PRIMARY KEY CLUSTERED (	[ScriptId] ASC) )";

            databaseHelper.ExecuteSql(sql);
        }

        private void CreateSchema(DatabaseHelper databaseHelper, string schemaName)
        {
            var sql = $"CREATE SCHEMA [{schemaName}]";
            databaseHelper.ExecuteSql(sql);
        }
    }
}
