using Auction_Web_App.Models;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Auction_Web_App.Data
{
    public class ApplicationDBContext : IdentityDbContext<User>
    {
        public ApplicationDBContext(DbContextOptions dbContextOptions) : base(dbContextOptions)
        {

        }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<Coin>()
                .HasOne(a => a.User)
                .WithMany(u => u.Coin)
                .HasForeignKey(a => a.UserId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Coin>()
                .HasOne(a => a.Style)
                .WithMany(u => u.Coin)
                .HasForeignKey(a => a.StyleId)
                .OnDelete(DeleteBehavior.Cascade);

            builder.Entity<Coin>()
                .HasOne(a => a.Medium)
                .WithMany(u => u.Coin)
                .HasForeignKey(a => a.MediumId)
                .OnDelete(DeleteBehavior.Cascade);

            List<IdentityRole> roles = new List<IdentityRole>
            {
                new IdentityRole
                {
                    Name = "Admin",
                    NormalizedName = "ADMIN"
                },
                new IdentityRole
                {
                    Name = "User",
                    NormalizedName = "USER"
                }
            };
            builder.Entity<IdentityRole>().HasData(roles);
        }

        public DbSet<Style> Style { get; set; }
        public DbSet<Medium> Medium { get; set; }
        public DbSet<Coin> Coin { get; set; }
        public DbSet<Auction> Auction { get; set; }
    }
}
