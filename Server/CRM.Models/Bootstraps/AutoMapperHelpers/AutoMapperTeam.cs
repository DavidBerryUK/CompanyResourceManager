using System.Diagnostics.CodeAnalysis;
using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.Teams;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Team;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperTeam : IAutoMapperConfig
    {
        public void Map(Profile profile)
        {
            // Map database to rest objects
            //
            profile.CreateMap<Team, TeamSummary>();
            profile.CreateMap<Team, TeamExtended>();

            // Map to List Item
            //
            profile.CreateMap<Team, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.TeamId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            profile.CreateMap<TeamExtended, Team>();
        }
    }
}