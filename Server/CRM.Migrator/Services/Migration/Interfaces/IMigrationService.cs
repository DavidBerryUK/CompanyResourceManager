namespace CRM.Migrator.Services.Migration.Interfaces
{
    internal interface IMigrationService
    {
        void RunMigration(string deploymentScriptName);
    }
}