namespace CRM.Migrator.Services.Database.Interfaces
{
    public interface IDatabaseHelperFactory
    {
        DatabaseHelper Get(string connectionStringName);
    }
}