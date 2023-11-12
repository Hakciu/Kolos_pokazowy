using Microsoft.EntityFrameworkCore;

public class ApplicationDbContext : DbContext
{
  public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
  protected override void OnModelCreating(ModelBuilder modelBuilder) { }
  public DbSet<Person> People { get; set; } = null!;
}