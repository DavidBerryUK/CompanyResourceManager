using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Rest.JobRole.Response;
using CRM.Models.Rest.Lists;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    internal class AutoMapperJobRole : IAutoMapperConfig
    {
        public void Map(IMapperConfigurationExpression cfg)
        {
            cfg.CreateMap<Database.JobRole, JobRole>();
            cfg.CreateMap<JobRole, Database.JobRole>();

            cfg.CreateMap<Database.JobRole, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.JobRoleId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));
        }
    }
}
