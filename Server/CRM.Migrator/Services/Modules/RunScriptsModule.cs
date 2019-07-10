using System;
using System.Collections.Generic;
using CRM.Migrator.Services.Modules.Interfaces;

namespace CRM.Migrator.Services.Modules
{
    public class RunScriptsModule : IRunScriptsModule
    {
        private readonly IRunSqlScriptsInPathModule _runSqlScriptsInPathModule;

        public RunScriptsModule(IRunSqlScriptsInPathModule runSqlScriptsInPathModule)
        {
            _runSqlScriptsInPathModule = runSqlScriptsInPathModule;
        }

        public List<string> RunScripts(Models.ScriptModels.Script script)
        {
            var errorList = new List<string>();

            foreach (var task in script.Tasks)
            {
                switch (task.Command.ToLower())
                {
                    case "runsqlscriptsinpath":
                        errorList.AddRange(_runSqlScriptsInPathModule.Run(task));
                        break;

                    default:
                        throw new ArgumentException("unknown script command:" + task.Command);

                }
            }

            return errorList;
        }
    }
}
