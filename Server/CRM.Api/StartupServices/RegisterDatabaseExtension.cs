using CRM.Database.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace CRM.Api.StartupServices
{
    public static class RegisterDatabaseExtension
    {
        public static void RegisterDatabase(this IServiceCollection services)
        {
            //
            // Add Dependency Injection for the database context
            //
            const string connection = @"Data Source=.;Initial Catalog=PSM;Integrated Security=True;";
            services.AddDbContext<PsmDatabaseContext>(options => options.UseSqlServer(connection));
        }
    }
}
