﻿using System.Diagnostics.CodeAnalysis;
using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.Security;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Security;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoSecurityGroup : IAutoMapperConfig
    {
        public void Map(Profile profile)
        {
            // Map database to rest objects
            //
            profile.CreateMap<SecurityGroup, SecurityGroupSummary>();
            profile.CreateMap<SecurityGroup, SecurityGroupExtended>();

            // Map to List Item
            //
            profile.CreateMap<SecurityGroup, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.SecurityGroupId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            profile.CreateMap<SecurityGroupExtended, SecurityGroup>();
        }
    }
}