namespace CRM.Migrator.Services.Database
{
    public class SetupDatabase
    {
        private readonly DatabaseHelper _databaseHelper;

        public SetupDatabase(string connectionName, string databaseName)
        {
            _databaseHelper = new DatabaseHelper(connectionName);

            if (_databaseHelper.DoesDatabaseExist(databaseName) == false) CreateDatabase(databaseName);
        }

        private void CreateDatabase(string databaseName)
        {
            var sql = $"CREATE DATABASE {databaseName}";

            _databaseHelper.ExecuteSql(sql);
        }
    }
}