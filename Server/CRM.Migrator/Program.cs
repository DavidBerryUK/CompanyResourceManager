using System;
using CRM.Migrator.Services.Migration.Interfaces;
using CRM.Migrator.Startup;
using Microsoft.Extensions.DependencyInjection;

namespace CRM.Migrator
{
    public class Program
    {
        private static ServiceProvider _serviceProvider;

        public static void Main(string[] args)
        {
            _serviceProvider = RegisterDependencyInjection.Setup();

            var migrationService = _serviceProvider.GetService<IMigrationService>();
            migrationService.RunMigration("DeployScript.xml");

            DisposeServices();
        }

        private static void DisposeServices()
        {
            switch (_serviceProvider)
            {
                case null:
                    return;

                case IDisposable disposable:
                    disposable.Dispose();
                    break;
            }
        }
    }
}