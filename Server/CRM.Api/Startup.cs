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
            services.RegisterInjection();
            services.RegisterDatabase();
            services.RegisterMvc();
            services.RegisterSwagger();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            app.RegisterAutoMapper();
            app.RegisterDevelopmentMode(env);
            app.RegisterStrictTransportSecurity(env);
            app.RegisterSwagger();
            app.RegisterHttpRedirection(env);
            app.RegisterMvc();
        }
    }
}
