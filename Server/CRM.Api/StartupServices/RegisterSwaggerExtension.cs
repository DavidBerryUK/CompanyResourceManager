using Microsoft.AspNetCore.Builder;
using Microsoft.Extensions.DependencyInjection;
using Swashbuckle.AspNetCore.Swagger;

namespace CRM.Api.StartupServices
{
    public static class RegisterSwaggerExtension
    {
        public static void RegisterSwagger(this IServiceCollection services)
        {
            services.AddSwaggerGen(c =>
            {
                c.SwaggerDoc("v1", new Info { Title = "Company Resource Manager API", Version = "v1" });
                c.CustomSchemaIds(i => i.FullName);
            });
        }

        public static void RegisterSwagger(this IApplicationBuilder app)
        {
           
            app.UseSwagger();
            app.UseSwaggerUI(c =>
            {
                
                c.SwaggerEndpoint("/swagger/v1/swagger.json", "Company Resource Manager API");
            });
        }
    }
}
