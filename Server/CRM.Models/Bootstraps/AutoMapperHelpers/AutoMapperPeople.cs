using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Rest.People.Response;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    internal  class AutoMapperPeople : IAutoMapperConfig
    {
        public  void Map(IMapperConfigurationExpression cfg)
        {
            cfg.CreateMap<Database.Person, Person>();
            cfg.CreateMap<Person, Database.Person>();

            cfg.CreateMap<Database.Person, PersonExtended>()
                .ForMember(dest => dest.JobRoleName, opt => opt.MapFrom(source => source.NavJobRole.Name));
        }
    }
}
