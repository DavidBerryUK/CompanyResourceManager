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
            // Map database to rest objects
            //
            cfg.CreateMap<Database.JobRole, JobRoleSummary>();
            cfg.CreateMap<Database.JobRole, JobRoleExtended>();
            cfg.CreateMap<Database.JobRole, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.JobRoleId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            cfg.CreateMap<JobRoleExtended, Database.JobRole>();
        }
    }
}
