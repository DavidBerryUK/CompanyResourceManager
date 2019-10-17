using AutoMapper;
using CRM.Models.Database.JobRoles;
using CRM.Models.Rest.JobRole;
using CRM.Models.Rest.Lists;
using System.Diagnostics.CodeAnalysis;

namespace CRM.Api.AutoMapperRegistration
{
    [SuppressMessage("ReSharper", "UnusedMember.Global")]
    internal class AutoMapperJobRole : Profile
    {
        public AutoMapperJobRole()
        {
            // Map database to rest objects
            //
            CreateMap<JobRole, JobRoleSummary>();
            CreateMap<JobRole, JobRoleExtended>();

            // Map to List Item
            //
            CreateMap<JobRole, ListItem>()
                .ForMember(dest => dest.Id, opt => opt.MapFrom(source => source.JobRoleId))
                .ForMember(dest => dest.Name, opt => opt.MapFrom(source => source.Name));

            // Map rest objects back to database entity objects
            //
            CreateMap<JobRoleExtended, JobRole>();
        }
    }
}