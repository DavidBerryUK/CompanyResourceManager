using Microsoft.Extensions.DependencyInjection;
using System;
using CRM.Service.Repository.AssetServices;
using CRM.Service.Repository.AssetServices.Interfaces;
using CRM.Service.Repository.AssetTypeServices;
using CRM.Service.Repository.AssetTypeServices.Interfaces;
using CRM.Service.Repository.JobRoleServices;
using CRM.Service.Repository.JobRoleServices.Interfaces;
using CRM.Service.Repository.PersonServices;
using CRM.Service.Repository.PersonServices.Interfaces;
using CRM.Service.Repository.SecurityServices;
using CRM.Service.Repository.SecurityServices.Interfaces;
using CRM.Service.Repository.SkillServices;
using CRM.Service.Repository.SkillServices.Interfaces;
using CRM.Service.Repository.TeamServices;
using CRM.Service.Repository.TeamServices.Interfaces;

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
            services.AddTransient<IPersonSimpleQueryService, PersonSimpleQueryService>();
            services.AddTransient<IPersonCrudService, PersonCrudService>();

            //  Job
            services.AddTransient<IJobRoleCrudService, JobRoleCrudService>();

            //  Skills
            services.AddTransient<ISkillCrudService, SkillCrudService>();

            //  Security Groups
            services.AddTransient<ISecurityGroupCrudService, SecurityGroupCrudService>();

            //  Teams
            services.AddTransient<ITeamCrudService, TeamCrudService>();

            //  Assets Types
            services.AddTransient<IAssetCrudService, AssetCrudService>();

            // Assets
            services.AddTransient<IAssetCrudService, AssetCrudService>();
            services.AddTransient<IAssetTypeCrudService, AssetTypeCrudService>();
        }
    }
}
