using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.Teams;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Team;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperTeam : IAutoMapperConfig
    {
        public void Map(IMapperConfigurationExpression cfg)
        {
            // Map database to rest objects
            //
            cfg.CreateMap<Team, TeamSummary>();
            cfg.CreateMap<Team, TeamExtended>();

            // Map to List Item
            //
            cfg.CreateMap<Team, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.TeamId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            cfg.CreateMap<TeamExtended, Team>();
        }
    }
}
