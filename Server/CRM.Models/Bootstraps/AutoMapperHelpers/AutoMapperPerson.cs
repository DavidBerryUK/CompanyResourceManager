using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Person.Response;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    internal  class AutoMapperPerson : IAutoMapperConfig
    {
        public  void Map(IMapperConfigurationExpression cfg)
        {
            // Map database to rest objects
            //
            cfg.CreateMap<Database.Person, PersonSummary>()
                .ForMember(dest => dest.JobRoleName, opt => opt.MapFrom(source => source.NavJobRole.Name));

            cfg.CreateMap<Database.Person, PersonExtended>()
                .ForMember(dest => dest.JobRoleName, opt => opt.MapFrom(source => source.NavJobRole.Name));

            cfg.CreateMap<Database.Person, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.PersonId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => $"{source.Forename} {source.Surname}") );

            // Map rest objects back to database entity objects
            //
            cfg.CreateMap<PersonExtended, Database.Person>();
        }
    }
}
