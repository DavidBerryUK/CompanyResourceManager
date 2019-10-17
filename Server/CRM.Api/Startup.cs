using System;
using System.Reflection;
using AutoMapper;
using CRM.Api.StartupServices;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace CRM.Api
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            if (services == null)
            {
                throw new ArgumentNullException(nameof(services));
            }

            //services.AddAutoMapper(Assembly.GetExecutingAssembly().GetType());
            services.AddAutoMapper(typeof(Startup));
            services.RegisterSwagger();
            services.RegisterInjection();
            services.RegisterDatabase();
            services.RegisterMvc();
            
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            if (app == null)
            {
                throw new ArgumentNullException(nameof(app));
            }

            if (env == null)
            {
                throw new ArgumentNullException(nameof(env));
            }

            app.RegisterSwagger();
            app.RegisterDevelopmentMode(env);
            app.RegisterStrictTransportSecurity(env);
            
            app.RegisterHttpRedirection(env);
            app.RegisterMvc();
        }
    }
}