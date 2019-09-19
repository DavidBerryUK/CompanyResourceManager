﻿using System.Diagnostics.CodeAnalysis;
using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.JobRoles;
using CRM.Models.Rest.JobRole;
using CRM.Models.Rest.Lists;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperJobRole : IAutoMapperConfig
    {
        public void Map(IMapperConfigurationExpression cfg)
        {
            // Map database to rest objects
            //
            cfg.CreateMap<JobRole, JobRoleSummary>();
            cfg.CreateMap<JobRole, JobRoleExtended>();

            // Map to List Item
            //
            cfg.CreateMap<JobRole, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.JobRoleId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            cfg.CreateMap<JobRoleExtended, JobRole>();
        }
    }
}