using Microsoft.EntityFrameworkCore;
using WebApplication1.Data.Entities;

namespace WebApplication1.CustomDBContenxt
{
    public class DbContextdetail(DbContextOptions<DbContextdetail> options) : DbContext(options)
    {
        //This is a constructor above which inherits the methods from Dbcontext use to query and save the data in databse thus allow performing 
        //database operations using entity framework ,write query here using  ORM (object relation mapping)
        public DbSet<UserDetail> UserDetails { get; set; }
        public DbSet<AuthDetail> AuthUsers { get; set; }

        
    }

}

