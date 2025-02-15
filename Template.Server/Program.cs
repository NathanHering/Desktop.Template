using Microsoft.Extensions.FileProviders;


var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddCors(options =>
{
    options.AddDefaultPolicy(builder => 
        builder.AllowAnyOrigin()
               .AllowAnyMethod()
               .AllowAnyHeader());
});

var app = builder.Build();
// app.UseHttpsRedirection();
app.UseCors();
app.UseAuthorization();

string root = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot");
Console.WriteLine($"Serving static files from {root}");
app.UseStaticFiles(new StaticFileOptions
{
    FileProvider = new PhysicalFileProvider(root),
    RequestPath = ""
});

app.MapControllers();
app.Run();

// var builder = new WebHostBuilder()
//     .UseKestrel()
//     .UseContentRoot(Directory.GetCurrentDirectory())
//     .ConfigureServices(services =>
//     {
//         services.AddScoped(sp => new HttpClient { BaseAddress = new Uri("https://example.com") });
//     })
//     .Configure(app =>
//     {
//         // Configure static file 
//         app.UseStaticFiles(new StaticFileOptions
//         {
//             FileProvider = new PhysicalFileProvider(root),
//             RequestPath = ""
//         });
//     });

// var host = builder.Build();

// await host.RunAsync();
