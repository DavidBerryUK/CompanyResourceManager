using System.IO;
using CRM.Migrator.Models.Configuration;
using CRM.Migrator.Services.Database;
using CRM.Migrator.Services.Database.Interfaces;
using CRM.Migrator.Services.Migration;
using CRM.Migrator.Services.Migration.Interfaces;
using CRM.Migrator.Services.Modules;
using CRM.Migrator.Services.Modules.Interfaces;
using CRM.Migrator.Services.Script;
using CRM.Migrator.Services.Script.Interfaces;
using CRM.Migrator.Services.ScriptAuditor;
using CRM.Migrator.Services.ScriptAuditor.Interfaces;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CRM.Migrator.Startup
{
    public class RegisterDependencyInjection
    {
        public static ServiceProvider Setup()
        {
            var serviceCollection = new ServiceCollection();

            SetupConfiguration(serviceCollection);
            serviceCollection.AddLogging();
            serviceCollection.AddTransient<IMigrationService, MigrationService>();
            serviceCollection.AddTransient<ISetupAuditTableService, SetupAuditTableService>();
            serviceCollection.AddTransient<IDatabaseHelperFactory, DatabaseHelperFactory>();
            serviceCollection.AddTransient<IScriptLoaderService, ScriptLoaderService>();
            serviceCollection.AddTransient<ILoadScriptModule, LoadScriptModule>();
            serviceCollection.AddTransient<IRunSqlScriptsInPathModule, RunSqlScriptsInPathModule>();
            serviceCollection.AddTransient<IRunScriptsModule, RunScriptsModule>();
            serviceCollection.AddTransient<IRenumberFilesScriptsModule, RenumberFilesScriptsModule>();

            var serviceProvider = serviceCollection.BuildServiceProvider();

            return serviceProvider;
        }

        private static void SetupConfiguration(IServiceCollection serviceCollection)
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json", false)
                .Build();

            serviceCollection.AddOptions();
            serviceCollection.Configure<ApplicationSettings>(configuration.GetSection("Migration"));
        }
    }
}