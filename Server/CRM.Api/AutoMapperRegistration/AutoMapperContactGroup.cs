using AutoMapper;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace CRM.Api.AutoMapperRegistration
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperContactGroup : Profile
    {
        public AutoMapperContactGroup()
        {
            // Map database to rest objects
            //
            CreateMap<ContactGroup, ContactGroupSummary>()
                .ForMember(
                    dest => dest.Contacts,
                    map => map.MapFrom(
                        src => src.NavContacts
                            .ToList()
                            .OrderBy(order => order.NavContactType.Name)));
        }
    }
}