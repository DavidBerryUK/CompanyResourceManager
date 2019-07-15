using AutoMapper;
using AutoMapper.Configuration;
using CRM.Models.Bootstraps;
using Microsoft.AspNetCore.Builder;
using System;

namespace CRM.Api.StartupServices
{
    internal static class RegisterAutoMapperExtension
    {
        public static void RegisterAutoMapper(this IApplicationBuilder app)
        {
            if (app == null)
            {
                throw new ArgumentNullException(nameof(app));
            }

            var cfg = new MapperConfigurationExpression();
            new AutoMapperBootstrap().ConfigureAutoMapperTransformations(cfg);
            Mapper.Initialize(cfg);
        }
    }
}
