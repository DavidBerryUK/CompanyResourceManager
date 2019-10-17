using AutoMapper;
using CRM.Models.Database.Skills;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Skill;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Api.AutoMapperRegistration
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperSkill : Profile
    {
        public AutoMapperSkill()
        {
            // Map database to rest objects
            //
            CreateMap<Skill, SkillSummary>();
            CreateMap<Skill, SkillExtended>();

            // Map to List Item
            //
            CreateMap<Skill, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.SkillId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            CreateMap<SkillExtended, Skill>();
        }
    }
}