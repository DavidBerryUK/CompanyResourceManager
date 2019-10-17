using System.Diagnostics.CodeAnalysis;
using AutoMapper;
using CRM.Models.Bootstraps.Interfaces;
using CRM.Models.Database.Persons;
using CRM.Models.Rest.Lists;
using CRM.Models.Rest.Person;

namespace CRM.Models.Bootstraps.AutoMapperHelpers
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperPerson : IAutoMapperConfig
    {
        public void Map(Profile profile)
        {
            // Map database to rest objects
            //
            profile.CreateMap<Person, PersonSummary>()
                .ForMember(dest => dest.JobRoleName, opt => opt.MapFrom(source => source.NavJobRole.Name));

            profile.CreateMap<Person, PersonExtended>()
                .ForMember(dest => dest.JobRoleName, opt => opt.MapFrom(source => source.NavJobRole.Name));

            // Map to List Item
            //
            profile.CreateMap<Person, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.PersonId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => $"{source.Forename} {source.Surname}"));

            // Map rest objects back to database entity objects
            //
            profile.CreateMap<PersonExtended, Person>();
        }
    }
}