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
        public void Map(Profile profile)
        {
            // Map database to rest objects
            //
            profile.CreateMap<Skill, SkillSummary>();
            profile.CreateMap<Skill, SkillExtended>();

            // Map to List Item
            //
            profile.CreateMap<Skill, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.SkillId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            profile.CreateMap<SkillExtended, Skill>();
        }
    }
}