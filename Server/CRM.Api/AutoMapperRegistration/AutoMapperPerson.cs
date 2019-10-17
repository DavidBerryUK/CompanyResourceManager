using AutoMapper;
using CRM.Models.Database.Persons;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Person;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Api.AutoMapperRegistration
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperPerson : Profile
    {
        public AutoMapperPerson()
        {
            // Map database to rest objects
            //
            CreateMap<Person, PersonSummary>()
                .ForMember(dest => dest.JobRoleName, opt => opt.MapFrom(source => source.NavJobRole.Name));

            CreateMap<Person, PersonExtended>()
                .ForMember(dest => dest.JobRoleName, opt => opt.MapFrom(source => source.NavJobRole.Name));

            // Map to List Item
            //
            CreateMap<Person, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.PersonId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => $"{source.Forename} {source.Surname}"));

            // Map rest objects back to database entity objects
            //
            CreateMap<PersonExtended, Person>();
        }
    }
}