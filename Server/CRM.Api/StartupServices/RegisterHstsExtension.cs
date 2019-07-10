﻿using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;

namespace CRM.Api.StartupServices
{
    public static class RegisterHstsExtension
    {
        public static void RegisterStrictTransportSecurity(this IApplicationBuilder app, IHostingEnvironment env)
        {
            if (!env.IsDevelopment())
            {
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
        }
    }
}
