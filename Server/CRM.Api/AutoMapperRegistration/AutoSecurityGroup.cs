using AutoMapper;
using CRM.Models.Database.Security;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Security;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Api.AutoMapperRegistration
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoSecurityGroup : Profile
    {
        public AutoSecurityGroup()
        {
            // Map database to rest objects
            //
            CreateMap<SecurityGroup, SecurityGroupSummary>();
            CreateMap<SecurityGroup, SecurityGroupExtended>();

            // Map to List Item
            //
            CreateMap<SecurityGroup, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.SecurityGroupId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            CreateMap<SecurityGroupExtended, SecurityGroup>();
        }
    }
}