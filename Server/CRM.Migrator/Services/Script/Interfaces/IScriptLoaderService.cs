namespace CRM.Migrator.Services.Script.Interfaces
{
    public interface IScriptLoaderService
    {
        void LoadScript(string scriptPath);
        void RunScript();
    }
}
