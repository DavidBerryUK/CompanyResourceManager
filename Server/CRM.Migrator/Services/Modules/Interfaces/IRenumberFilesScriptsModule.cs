using System.Collections.Generic;

namespace CRM.Migrator.Services.Modules.Interfaces
{
    public interface IRenumberFilesScriptsModule
    {
        List<string> RenameScripts(Models.ScriptModels.Task task);
    }
}