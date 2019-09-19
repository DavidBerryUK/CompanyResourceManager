using System;
using System.Collections.Generic;
using System.Linq;
using CRM.Migrator.Services.Modules.Interfaces;

namespace CRM.Migrator.Services.Modules
{
    public class RunScriptsModule : IRunScriptsModule
    {
        private readonly IRenumberFilesScriptsModule _renumberFilesScriptsModule;
        private readonly IRunSqlScriptsInPathModule _runSqlScriptsInPathModule;

        public RunScriptsModule(
            IRunSqlScriptsInPathModule runSqlScriptsInPathModule,
            IRenumberFilesScriptsModule renumberFilesScriptsModule)
        {
            _runSqlScriptsInPathModule = runSqlScriptsInPathModule;
            _renumberFilesScriptsModule = renumberFilesScriptsModule;
        }

        public List<string> RunScripts(Models.ScriptModels.Script script)
        {
            var errorList = new List<string>();

            foreach (var task in script.Tasks.Where(o => o.IsEnabled))
                switch (task.Command.ToLower())
                {
                    case "runsqlscriptsinpath":
                        errorList.AddRange(_runSqlScriptsInPathModule.Run(task));
                        break;

                    case "renumberfiles":
                        errorList.AddRange(_renumberFilesScriptsModule.RenameScripts(task));
                        break;

                    default:
                        throw new ArgumentException("unknown scriptData command:" + task.Command);
                }

            return errorList;
        }
    }
}