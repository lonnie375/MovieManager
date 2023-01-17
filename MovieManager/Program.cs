<<<<<<< HEAD
using Microsoft.EntityFrameworkCore;
using MovieManager.Data;
using MovieManager.Services;
using MovieManager.Services.Interfaces;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<ApplicationDbContext>(x => x.UseSqlServer(builder.Configuration.GetConnectionString("AppDb")));


//Dependency INjection so we kow where to get the information for the object 
builder.Services.AddScoped<IIMDBService, IMDBService>();

=======
﻿var builder = WebApplication.CreateBuilder(args);
>>>>>>> main

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

<<<<<<< HEAD
// Address CORs
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: "LocalOriginsPolicy",
        builder => builder.AllowAnyOrigin().AllowAnyMethod().AllowAnyHeader()
    );
}
);

=======
>>>>>>> main
var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

<<<<<<< HEAD
//Apply CORs 

app.UseCors("LocalOriginsPolicy");

=======
>>>>>>> main
app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
<<<<<<< HEAD
=======

>>>>>>> main
