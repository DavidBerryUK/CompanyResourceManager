using CRM.Migrator.Models.Configuration;
using CRM.Migrator.Services.Migration.Interfaces;
using CRM.Migrator.Services.Script.Interfaces;
using CRM.Migrator.Services.ScriptAuditor.Interfaces;
using Microsoft.Extensions.Options;

namespace CRM.Migrator.Services.Migration
{
    internal class MigrationService : IMigrationService
    {
        private readonly ISetupAuditTableService _setupAuditTableService;
        private readonly IOptions<ApplicationSettings> _configuration;
        private readonly IScriptLoaderService _scriptLoaderService;

        public MigrationService(
            ISetupAuditTableService setupAuditTableService, 
            IOptions<ApplicationSettings> configuration, 
            IScriptLoaderService scriptLoaderService)
        {
            _setupAuditTableService = setupAuditTableService;
            _configuration = configuration;
            _scriptLoaderService = scriptLoaderService;
        }

        public void RunMigration(string deploymentScriptName)
        {
             _setupAuditTableService.SetupAuditTable(
                 _configuration.Value.Audit.DatabaseConnection, 
                 _configuration.Value.Audit.DatabaseSchema);

            _scriptLoaderService.LoadScript(deploymentScriptName);
            _scriptLoaderService.RunScript();
        }
    }
}
