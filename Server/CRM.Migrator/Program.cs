using System;
using CRM.Migrator.Services.Migration.Interfaces;
using CRM.Migrator.Startup;
using Microsoft.Extensions.DependencyInjection;

namespace CRM.Migrator
{
    class Program
    {
        private static ServiceProvider _serviceProvider;

        static void Main(string[] args)
        {
            _serviceProvider = RegisterDependencyInjection.Setup();

            var migrationService = _serviceProvider.GetService<IMigrationService>();
            migrationService.RunMigration("DeployScript.xml");

            DisposeServices();
        }

        private static void DisposeServices()
        {
            if (_serviceProvider == null)
            {
                return;
            }
            if (_serviceProvider is IDisposable)
            {
                ((IDisposable)_serviceProvider).Dispose();
            }
        }
    }
}
