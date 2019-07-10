using CRM.Migrator.Models.AuditModels;

namespace CRM.Migrator.Services.Database
{
    class ScriptTableRepository
    {
        public static void Add(ScriptAudit audit,string schema, string connectionString)
        {
            var db = new DatabaseHelper(connectionString);

            var sql = "INSERT INTO [" + schema + "].[ScriptAudit] ( FullName, Name, Success, Error, ExecuteDateTime ) VALUES ( ";

            sql = sql + $"'{audit.FullName}',";
            sql = sql + $"'{audit.Name}',";            
            sql = sql + (audit.Success ?  "1," : "0,");
            sql = sql + $"'{audit.Error.Replace("'","''")}',";
            sql = sql + $"'{audit.ExecuteDatetime:yyyy-MM-dd HH:MM:ss}'";
            sql = sql + ")";

            db.ExecuteSql(sql);
        }
    }
}
