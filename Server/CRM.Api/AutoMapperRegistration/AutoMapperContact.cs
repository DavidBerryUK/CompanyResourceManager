using AutoMapper;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Api.AutoMapperRegistration
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperContact : Profile
    {
        public AutoMapperContact()
        {
            // Map database to rest objects
            //
            CreateMap<Contact, ContactSummary>()
                .ForMember(dest => dest.ContactTypeName, opt => opt.MapFrom(source => source.NavContactType.Name));

            CreateMap<ContactSummary, Contact>();
        }
    }
}