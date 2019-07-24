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
using CRM.Service.SecurityServices;
using CRM.Service.SecurityServices.Interfaces;
using CRM.Service.SkillServices;
using CRM.Service.SkillServices.Interfaces;

namespace CRM.Api.StartupServices
{
    internal static class RegisterInjectionExtension
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
            services.AddTransient<IPersonSimpleQueryService, PersonSimpleQueryService>();

            //  Job
            //
            services.AddTransient<IJobRoleGetService, JobRoleGetService>();
            services.AddTransient<IJobRoleUpdateService, JobRoleUpdateService>();

            //  Skills
            //
            services.AddTransient<ISkillGetService, SkillGetService>();
            services.AddTransient<ISkillUpdateService, SkillUpdateService>();

            //  Security Groups
            //
            services.AddTransient<ISecurityGroupGetService, SecurityGroupGetService>();
            services.AddTransient<ISecurityGroupUpdateService, SecurityGroupUpdateService>();

            //  Assets Types
            // 
            services.AddTransient<IAssetTypeGetService, AssetTypeGetService>();
            services.AddTransient<IAssetTypeUpdateService, AssetTypeUpdateService>();

            // Assets
            //
            services.AddTransient<IAssetGetService, AssetGetService>();
            services.AddTransient<IAssetUpdateService, AssetUpdateService>();
            
        }
    }
}
