using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace CRM.Api.StartupServices
{
    public static class RegisterHttpRedirectionExtension
    {


        public static void RegisterHttpRedirection(this IApplicationBuilder app, IHostingEnvironment env)
        {
            app.RegisterStrictTransportSecurity(env);
        }
    }
}
