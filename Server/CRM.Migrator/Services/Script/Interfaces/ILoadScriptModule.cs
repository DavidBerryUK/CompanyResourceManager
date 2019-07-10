namespace CRM.Migrator.Services.Script.Interfaces
{
    public interface ILoadScriptModule
    {
        Models.ScriptModels.Script LoadScript(string scriptPath);
    }
}