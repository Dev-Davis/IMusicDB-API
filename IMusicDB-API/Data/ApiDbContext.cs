using IMusicDB_API.Models;
using Microsoft.EntityFrameworkCore;

namespace IMusicDB_API.Data
{
    // Derive the DbContext class to the ApiDbContext class (resolve the namspace for the DbContext class
    // -----> ApiDbContext is responsible for the CRUD operations to the database
    public class ApiDbContext : DbContext
    {
        // create a constructor using ctor (Tab x2)
        // We need this constructor to pass the Database Provider & Connection String
        public ApiDbContext(DbContextOptions<ApiDbContext> options) : base(options)
        {

        }

        // DbSet is the table - this is creating a table inside of the database named Songs
        public DbSet<Song> Songs { get; set; }
    }
}
