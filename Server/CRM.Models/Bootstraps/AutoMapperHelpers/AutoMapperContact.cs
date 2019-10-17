using System.Diagnostics.CodeAnalysis;
using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperContact : IAutoMapperConfig
    {
        public void Map(Profile profile)
        {
            // Map database to rest objects
            //
            profile.CreateMap<Contact, ContactSummary>()
                .ForMember(dest => dest.ContactTypeName, opt => opt.MapFrom(source => source.NavContactType.Name));

            profile.CreateMap<ContactSummary, Contact>();
        }
    }
}