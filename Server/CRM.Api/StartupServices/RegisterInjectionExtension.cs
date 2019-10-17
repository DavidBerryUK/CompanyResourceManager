using CRM.Service.Repository.AssetServices;
using CRM.Service.Repository.AssetServices.Interfaces;
using CRM.Service.Repository.AssetTypeServices;
using CRM.Service.Repository.AssetTypeServices.Interfaces;
using CRM.Service.Repository.BaseServices.DirectSql;
using CRM.Service.Repository.ContactServices;
using CRM.Service.Repository.ContactServices.Interfaces;
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
using System.Reflection;
using AutoMapper;

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
            services.AddTransient<IPersonCrudService, PersonExtendedCrudService>();

            //  Job Role
            services.AddTransient<IJobRoleCrudService, JobRoleExtendedCrudService>();

            //  Skills
            services.AddTransient<ISkillCrudService, SkillExtendedCrudService>();
            services.AddTransient<ISkillListService, SkillListService>();

            //  Security Groups
            services.AddTransient<ISecurityGroupCrudService, SecurityGroupExtendedCrudService>();
            services.AddTransient<ISecurityGroupListService, SecurityGroupListService>();

            //  Teams
            services.AddTransient<ITeamCrudService, TeamExtendedCrudService>();
            services.AddTransient<ITeamListService, TeamListService>();

            //  Assets Types
            services.AddTransient<IAssetCrudService, AssetExtendedCrudService>();
            
            // Assets
            services.AddTransient<IAssetCrudService, AssetExtendedCrudService>();
            services.AddTransient<IAssetTypeCrudService, AssetTypeExtendedCrudService>();

            // Contacts
            services.AddTransient<IContactTypeCrudService, ContactTypeCrudService>();
            services.AddTransient<IContactGroupCrudService, ContactGroupCrudService>();
            services.AddTransient<IContactCrudService, ContactCrudService>();
            services.AddTransient<IContactValidationCrudService, ContactValidationCrudService>();

            //
            services.AddTransient(typeof(IDirectSqlServices<>), typeof(DirectSqlServices<>));
        }
    }
}