using CRM.Migrator.Models.Configuration;
using CRM.Migrator.Services.Modules.Interfaces;
using CRM.Migrator.Services.Script.Interfaces;
using Microsoft.Extensions.Options;

namespace CRM.Migrator.Services.Script
{
    public class ScriptLoaderService : IScriptLoaderService
    {
        private Models.ScriptModels.Script _script;
        private readonly ILoadScriptModule _loadScriptModule;
        private readonly IOptions<ApplicationSettings> _applicationSettings;
        private readonly IRunScriptsModule _runScriptsModule;

        public ScriptLoaderService(
            ILoadScriptModule loadScriptModule, 
            IOptions<ApplicationSettings> applicationSettings, 
            IRunScriptsModule runScriptsModule)
        {
            _loadScriptModule = loadScriptModule;
            _applicationSettings = applicationSettings;
            _runScriptsModule = runScriptsModule;
        }

        public void LoadScript(string scriptPath)
        {
            _script = _loadScriptModule.LoadScript(scriptPath);   
        }

        public void RunScript()
        {
            var errorList  = _runScriptsModule.RunScripts(_script);

            //if (errorList.Count > 0)
            //{
            //    var auditSchema = _applicationSettings.Value.Audit.DatabaseSchema;

            //    var msg = $"There were {errorList.Count} errors while running update sql scripts, examine the [" +
            //              auditSchema + "].[ScriptAudit] table for details." + Environment.NewLine;

            //    errorList.ForEach(error => msg = msg + error + Environment.NewLine);

            //    throw new ApplicationException(msg);
            //}
        }
    }
}
