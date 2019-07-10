using System.Data.SqlClient;

namespace CRM.Migrator.Services.Database
{
    public class DatabaseHelper
    {
        private readonly string _connectionString;

        public DatabaseHelper(string connectionString)
        {
            this._connectionString = connectionString;
        }        

        public bool DoesSchemaExist(string schema)
        {
            var sql = $"SELECT COUNT(*) FROM INFORMATION_SCHEMA.SCHEMATA WHERE SCHEMA_NAME = '{schema}'";
            var count = this.ExecuteScalar(sql);
            if (count > 0)
            {
                return true;
            }
            return false;
        }

        public bool DoesTableExist (string schema, string tableName)
        {
            var sql = $"SELECT COUNT(*) FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = '{schema}' and TABLE_NAME = '{tableName}'";
            var count = this.ExecuteScalar(sql);
            if (count > 0)
            {
                return true;
            }
            return false;
        }

        public bool DoesDatabaseExist(string databaseName)
        {
            var sql = $"SELECT COUNT(*) FROM sys.databases WHERE name = '{databaseName}'";
            var count = this.ExecuteScalar(sql);
            return count > 0;
        }

        public int ExecuteScalar(string sql)
        {
            using (SqlConnection connection = new SqlConnection(this._connectionString))
            {
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    connection.Open();
                    object response =  command.ExecuteScalar();
                    return (int) response;
                }
            }
        }

        public void ExecuteSql(string sql)
        {
            using (SqlConnection connection = new SqlConnection(this._connectionString))
            {
                using (SqlCommand command = new SqlCommand(sql, connection))
                {
                    connection.Open();
                    command.CommandTimeout = 120;
                    command.ExecuteNonQuery();
                }
            }
        }
    }
}

