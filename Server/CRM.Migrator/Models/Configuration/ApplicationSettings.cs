using System;
using System.Collections.Generic;
using System.Linq;

namespace CRM.Migrator.Models.Configuration
{
    public class ApplicationSettings
    {
        public AuditConfig Audit { get; set; }
        public List<ConnectionStringConfig> ConnectionStrings { get; set; }


        public string GetConnectionString(string connectionStringName)
        {
            var connectionStringConfig = ConnectionStrings.FirstOrDefault(o =>
                o.Name.Equals(connectionStringName, StringComparison.InvariantCultureIgnoreCase));

            // ReSharper disable once ConvertIfStatementToReturnStatement
            if (connectionStringConfig == null)
            {
                return "";
            }

            return connectionStringConfig.ConnectionString;
        }
    }
}
