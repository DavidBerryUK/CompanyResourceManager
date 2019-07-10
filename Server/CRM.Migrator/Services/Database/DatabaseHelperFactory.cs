using CRM.Migrator.Models.Configuration;
using CRM.Migrator.Services.Database.Interfaces;
using Microsoft.Extensions.Options;

namespace CRM.Migrator.Services.Database
{
    public class DatabaseHelperFactory : IDatabaseHelperFactory
    {
        private readonly IOptions<ApplicationSettings> _configuration;

        public DatabaseHelperFactory( IOptions<ApplicationSettings> configuration)
        {
            _configuration = configuration;
        }

        public DatabaseHelper Get(string connectionStringName)
        {
            var connectionString = _configuration.Value.GetConnectionString(connectionStringName);
            var databaseHelper = new DatabaseHelper(connectionString);
            return databaseHelper;
        }
    }
}
