using AutoMapper;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using CRM.Models.Rest.Lists;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Api.AutoMapperRegistration
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperContactType : Profile
    {
        public AutoMapperContactType()
        {
            // Map database to rest objects
            //
            CreateMap<ContactType, ContactTypeSummary>();
            CreateMap<ContactType, ContactTypeExtended>()
                .ForMember(dest => dest.ContactValidationName, opt => opt.MapFrom(source => source.NavContactValidation.Name));

            // Map to List Item
            //
            CreateMap<ContactType, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.ContactTypeId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            CreateMap<ContactTypeSummary, ContactType>();
            CreateMap<ContactTypeExtended, ContactType>();
        }
    }
}