using AutoMapper;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using CRM.Models.Rest.Lists;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Api.AutoMapperRegistration
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperContactValidation : Profile
    {
        public AutoMapperContactValidation()
        {
            // Map database to rest objects
            //
            CreateMap<ContactValidation, ContactValidationSummary>();

            // Map to List Item
            //
            CreateMap<ContactValidation, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.ContactValidationId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            CreateMap<ContactValidationSummary, ContactValidation>();
        }
    }
}