using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using CRM.Models.Rest.Lists;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperContactType : IAutoMapperConfig
    {
        public void Map(Profile profile)
        {
            // Map database to rest objects
            //
            profile.CreateMap<ContactType, ContactTypeSummary>();
            profile.CreateMap<ContactType, ContactTypeExtended>()
                .ForMember(dest => dest.ContactValidationName, opt => opt.MapFrom(source => source.NavContactValidation.Name));

            // Map to List Item
            //
            profile.CreateMap<ContactType, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.ContactTypeId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            profile.CreateMap<ContactTypeSummary, ContactType>();
            profile.CreateMap<ContactTypeExtended, ContactType>();
        }
    }
}