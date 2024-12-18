using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.FileProviders;
using System.IO;

var builder = new WebHostBuilder()
    .UseKestrel()
    .UseContentRoot(Directory.GetCurrentDirectory())
    .ConfigureServices(services =>
    {
        services.AddScoped(sp => new HttpClient { BaseAddress = new Uri("https://example.com") });
    })
    .Configure(app =>
    {
        // Configure static file hosting
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(
                Path.Combine(Directory.GetCurrentDirectory(), "wwwroot")),
            RequestPath = ""
        });
    });

var host = builder.Build();

await host.RunAsync();
