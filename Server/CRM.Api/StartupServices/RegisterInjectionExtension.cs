using CRM.Service.AssetServices;
using CRM.Service.AssetServices.Interfaces;
using CRM.Service.AssetTypeServices;
using CRM.Service.AssetTypeServices.Interfaces;
using CRM.Service.JobRoleServices;
using CRM.Service.JobRoleServices.Interfaces;
using CRM.Service.PeopleServices;
using CRM.Service.PeopleServices.Interfaces;
using Microsoft.Extensions.DependencyInjection;

namespace CRM.Api.StartupServices
{
    public static class RegisterInjectionExtension
    {
        public static void RegisterInjection(this IServiceCollection services)
        {
            // People
            //
            services.AddTransient<IPeopleGetService, PeopleGetService>();
            services.AddTransient<IPeopleUpdateService, PeopleUpdateService>();

            //  Job Roles
            //
            services.AddTransient<IJobRoleGetService, JobRoleGetService>();
            services.AddTransient<IJobRoleUpdateService, JobRoleUpdateService>();

            //  Assets
            // 
            services.AddTransient<IAssetGetService, AssetGetService>();
            services.AddTransient<IAssetUpdateService, AssetUpdateService>();
            services.AddTransient<IAssetTypeGetService, AssetTypeGetService>();
            services.AddTransient<IAssetTypeUpdateService, AssetTypeUpdateService>();
        }
    }
}
