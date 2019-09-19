using System.Diagnostics.CodeAnalysis;
using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.Skills;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Skill;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperSkill : IAutoMapperConfig
    {
        public void Map(IMapperConfigurationExpression cfg)
        {
            // Map database to rest objects
            //
            cfg.CreateMap<Skill, SkillSummary>();
            cfg.CreateMap<Skill, SkillExtended>();

            // Map to List Item
            //
            cfg.CreateMap<Skill, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.SkillId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            cfg.CreateMap<SkillExtended, Skill>();
        }
    }
}