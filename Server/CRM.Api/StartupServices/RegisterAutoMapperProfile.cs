using AutoMapper;
using CRM.Models.Bootstraps;

namespace CRM.Api.StartupServices
{
    internal class RegisterAutoMapperProfile : Profile
    {

        public RegisterAutoMapperProfile()
        {
            var mapper = new AutoMapperBootstrap();
            mapper.ConfigureAutoMapperTransformations(this);
        }
    }
}