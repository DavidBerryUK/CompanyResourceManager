using Microsoft.Data.SqlClient;

namespace CRM.Migrator.Services.Database
{
    public class DatabaseHelper
    {
        private readonly string _connectionString;

        public DatabaseHelper(string connectionString)
        {
            _connectionString = connectionString;
        }

        public bool DoesSchemaExist(string schema)
        {
            var sql = $"SELECT COUNT(*) FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '{schema}'";
            var count = ExecuteScalar(sql);

            // ReSharper disable once ConvertIfStatementToReturnStatement
            if (count > 0) return true;
            return false;
        }

        public bool DoesTableExist(string schema, string tableName)
        {
            var sql =
                $"SELECT COUNT(*) FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '{schema}' and TABLE_NAME = '{tableName}'";
            var count = ExecuteScalar(sql);

            // ReSharper disable once ConvertIfStatementToReturnStatement
            if (count > 0) return true;
            return false;
        }

        public bool DoesDatabaseExist(string databaseName)
        {
            var sql = $"SELECT COUNT(*) FROM sys.databases WHERE name = '{databaseName}'";
            var count = ExecuteScalar(sql);
            return count > 0;
        }

        public int ExecuteScalar(string sql)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                using (var command = new SqlCommand(sql, connection))
                {
                    connection.Open();
                    var response = command.ExecuteScalar();
                    return (int) response;
                }
            }
        }

        public void ExecuteSql(string sql)
        {
            using (var connection = new SqlConnection(_connectionString))
            {
                using (var command = new SqlCommand(sql, connection))
                {
                    connection.Open();
                    command.CommandTimeout = 120;
                    command.ExecuteNonQuery();
                }
            }
        }
    }
}