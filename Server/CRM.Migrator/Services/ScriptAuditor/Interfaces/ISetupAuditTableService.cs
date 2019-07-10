namespace CRM.Migrator.Services.ScriptAuditor.Interfaces
{
    public interface ISetupAuditTableService
    {
        void SetupAuditTable(string connectionName, string schemaName);
    }
}
