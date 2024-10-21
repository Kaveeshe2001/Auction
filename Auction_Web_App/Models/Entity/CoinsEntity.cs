using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Auction_Web_App.Models.Entity
{
    public class CoinsEntity
    {
        [Key]
        public Guid Id { get; set; }
        public string Lot { get; set; }
        public string Title { get; set; }
        public string Image { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }

        [Column(TypeName = "decimal(18,2)")]
        public decimal CurrentPrice { get; set; }
        public string Condition { get; set; }
        public DateTime? CreatedOn { get; set; } = DateTime.Now;

        [Required]
        public string? UserId { get; set; }
        [ForeignKey("ApplicationUser")]
        public User? User { get; set; }

        public List<Auction>? Auctions { get; set; }
        public List<Comment>? Comments { get; set; }

    }
}
