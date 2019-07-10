using AutoMapper;
using AutoMapper.Configuration;
using CRM.Models.Bootstraps;
using Microsoft.AspNetCore.Builder;

namespace CRM.Api.StartupServices
{
    public static class RegisterAutoMapperExtension
    {
        public static void RegisterAutoMapper(this IApplicationBuilder app)
        {
            var cfg = new MapperConfigurationExpression();
            new AutoMapperBootstrap().ConfigureAutoMapperTransformations(cfg);
            Mapper.Initialize(cfg);
        }
    }
}
