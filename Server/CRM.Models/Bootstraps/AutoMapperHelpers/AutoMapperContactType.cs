﻿using System.Diagnostics.CodeAnalysis;
using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using CRM.Models.Rest.Lists;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperContactType : IAutoMapperConfig
    {
        public void Map(IMapperConfigurationExpression cfg)
        {
            // Map database to rest objects
            //
            cfg.CreateMap<ContactType, ContactTypeSummary>();

            // Map to List Item
            //
            cfg.CreateMap<ContactType, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.ContactTypeId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            cfg.CreateMap<ContactTypeSummary, ContactType>();
        }
    }
}