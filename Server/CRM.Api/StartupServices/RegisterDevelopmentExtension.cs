using System;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace CRM.Api.StartupServices
{
    internal static class RegisterDevelopmentExtension
    {
        public static void RegisterDevelopmentMode(this IApplicationBuilder app, IHostingEnvironment env)
        {
            if (app == null)
            {
                throw new ArgumentNullException(nameof(app));
            }

            if (env == null)
            {
                throw new ArgumentNullException(nameof(env));
            }

            if (env.IsDevelopment()) app.UseDeveloperExceptionPage();
        }
    }
}