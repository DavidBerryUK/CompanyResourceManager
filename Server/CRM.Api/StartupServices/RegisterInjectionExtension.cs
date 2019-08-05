using CRM.Service.Repository.AssetServices;
using CRM.Service.Repository.AssetServices.Interfaces;
using CRM.Service.Repository.AssetTypeServices;
using CRM.Service.Repository.AssetTypeServices.Interfaces;
using CRM.Service.Repository.BaseServices.DirectSql;
using CRM.Service.Repository.ContractServices;
using CRM.Service.Repository.ContractServices.Interfaces;
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
using Microsoft.Extensions.DependencyInjection;
using System;

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

            //  Person
            services.AddTransient<IPersonSimpleQueryService, PersonSimpleQueryService>();
            services.AddTransient<IPersonCrudService, PersonCrudService>();

            //  Job Role
            services.AddTransient<IJobRoleCrudService, JobRoleCrudService>();

            //  Skills
            services.AddTransient<ISkillCrudService, SkillCrudService>();
            services.AddTransient<ISkillListService, SkillListService>();

            //  Security Groups
            services.AddTransient<ISecurityGroupCrudService, SecurityGroupCrudService>();
            services.AddTransient<ISecurityGroupListService, SecurityGroupListService>();

            //  Teams
            services.AddTransient<ITeamCrudService, TeamCrudService>();
            services.AddTransient<ITeamListService,TeamListService>();

            //  Assets Types
            services.AddTransient<IAssetCrudService, AssetCrudService>();

            // Assets
            services.AddTransient<IAssetCrudService, AssetCrudService>();
            services.AddTransient<IAssetTypeCrudService, AssetTypeCrudService>();

            // Contacts
            services.AddTransient<IContactTypeCrudService, ContactTypeCrudService>();
            services.AddTransient<IContactGroupCrudService, ContactGroupCrudService>();

            //
            services.AddTransient(typeof(IDirectSqlServices<>), typeof(DirectSqlServices<>));
            
        }
    }
}
