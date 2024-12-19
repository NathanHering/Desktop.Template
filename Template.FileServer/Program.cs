using Microsoft.Extensions.FileProviders;

string root = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
Console.WriteLine($"Serving static files from {root}");

var builder = new WebHostBuilder()
    .UseKestrel()
    .UseContentRoot(Directory.GetCurrentDirectory())
    .ConfigureServices(services =>
    {
        services.AddScoped(sp => new HttpClient { BaseAddress = new Uri("https://example.com") });
    })
    .Configure(app =>
    {
        // Configure static file 
        app.UseStaticFiles(new StaticFileOptions
        {
            FileProvider = new PhysicalFileProvider(root),
            RequestPath = ""
        });
    });

var host = builder.Build();

await host.RunAsync();
