using System.Collections.Generic;

namespace CRM.Migrator.Services.Modules.Interfaces
{
    public interface IRunScriptsModule
    {
        List<string> RunScripts(Models.ScriptModels.Script script);
    }
}