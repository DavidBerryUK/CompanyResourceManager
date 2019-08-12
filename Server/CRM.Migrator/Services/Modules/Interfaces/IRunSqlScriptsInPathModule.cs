using System.Collections.Generic;
using CRM.Migrator.Models.ScriptModels;

namespace CRM.Migrator.Services.Modules.Interfaces
{
    public interface IRunSqlScriptsInPathModule
    {
        List<string> Run(Task taskData);
    }
}