using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace CRM.Api.StartupServices
{
    public static class RegisterDevelopmentExtension
    {
        public static void RegisterDevelopmentMode(this IApplicationBuilder app, IHostingEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
        }
    }
}
