using CRM.Migrator.Models.AuditModels;

namespace CRM.Migrator.Services.Database
{
    public class ScriptTableRepository
    {
        public static void Add(ScriptAudit audit,string schema, string connectionString)
        {
            var db = new DatabaseHelper(connectionString);

            var sql = "INSERT INTO [" + schema + "].[ScriptAudit] ( FullName, Name, Success, Error, ExecuteDateTime ) VALUES ( ";

            sql += $"'{audit.FullName}',";
            sql += $"'{audit.Name}',";            
            sql += (audit.Success ?  "1," : "0,");
            sql += $"'{audit.Error.Replace("'","''")}',";
            sql += $"'{audit.ExecuteDatetime:yyyy-MM-dd HH:MM:ss}'";
            sql += ")";

            db.ExecuteSql(sql);
        }
    }
}
