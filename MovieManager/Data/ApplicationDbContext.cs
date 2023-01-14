using Microsoft.EntityFrameworkCore;
using MovieManager.Models;

namespace MovieManager.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<User>Users { get; set; }
        public DbSet<Movie>Movies { get; set; }
        public DbSet<Recommendation> Recommendation { get; set; }
    }
}
