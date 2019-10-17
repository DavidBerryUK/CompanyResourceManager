using AutoMapper;
using CRM.Models.Database.Teams;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Team;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Api.AutoMapperRegistration
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperTeam : Profile
    {
        public AutoMapperTeam()
        {
            // Map database to rest objects
            //
            CreateMap<Team, TeamSummary>();
            CreateMap<Team, TeamExtended>();

            // Map to List Item
            //
            CreateMap<Team, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.TeamId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            CreateMap<TeamExtended, Team>();
        }
    }
}