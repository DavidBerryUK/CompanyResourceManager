using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.Contacts;
using CRM.Models.Rest.Contacts;
using System.Diagnostics.CodeAnalysis;
using System.Linq;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperContactGroup : IAutoMapperConfig
    {
        public void Map(IMapperConfigurationExpression cfg)
        {
            // Map database to rest objects
            //
            cfg.CreateMap<ContactGroup, ContactGroupSummary>()
                .ForMember(
                    dest => dest.Contacts,
                    map => map.MapFrom(
                        src => src.NavContacts
                            .ToList()
                            .OrderBy(order => order.NavContactType.Name)));

        }
    }
}
