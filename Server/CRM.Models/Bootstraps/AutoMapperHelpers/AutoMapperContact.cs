using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperContact : IAutoMapperConfig
    {
        public void Map(IMapperConfigurationExpression cfg)
        {
            // Map database to rest objects
            //
            cfg.CreateMap<Contact, ContactSummary>()
                .ForMember(dest => dest.ContactTypeName, opt => opt.MapFrom(source => source.NavContactType.Name));

            cfg.CreateMap<ContactSummary, Contact>();
        }
    }
}
