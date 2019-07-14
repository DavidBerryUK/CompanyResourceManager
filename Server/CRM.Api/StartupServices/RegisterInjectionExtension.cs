using CRM.Service.AssetServices;
using CRM.Service.AssetServices.Interfaces;
using CRM.Service.AssetTypeServices;
using CRM.Service.AssetTypeServices.Interfaces;
using CRM.Service.JobRoleServices;
using CRM.Service.JobRoleServices.Interfaces;
using CRM.Service.PersonServices;
using CRM.Service.PersonServices.Interfaces;
using Microsoft.Extensions.DependencyInjection;
using System;

namespace CRM.Api.StartupServices
{
    public static class RegisterInjectionExtension
    {
        public static void RegisterInjection(this IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            //  person
            //
            services.AddTransient<IPersonGetService, PersonGetService>();
            services.AddTransient<IPersonUpdateService, PersonUpdateService>();

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
