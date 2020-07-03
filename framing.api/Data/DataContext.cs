using framing.api.Models;
using Microsoft.EntityFrameworkCore;

namespace framing.api.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }
        
        public DbSet<Value> Values { get; set; }
    }
}