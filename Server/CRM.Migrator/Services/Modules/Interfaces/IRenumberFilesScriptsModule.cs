using System.Collections.Generic;
using CRM.Migrator.Models.ScriptModels;

namespace CRM.Migrator.Services.Modules.Interfaces
{
    public interface IRenumberFilesScriptsModule
    {
        List<string> RenameScripts(Task task);
    }
}