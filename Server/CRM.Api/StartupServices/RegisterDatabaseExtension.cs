using CRM.Database.Context;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace CRM.Api.StartupServices
{
    public static class RegisterDatabaseExtension
    {
        public static void RegisterDatabase(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }
            //
            // Add Dependency Injection for the database context
            //
            const string connection = @"Data Source=.;Initial Catalog=CRM;Integrated Security=True;";
            services.AddDbContext<CrmDatabaseContext>(options => options.UseSqlServer(connection));
        }
    }
}
