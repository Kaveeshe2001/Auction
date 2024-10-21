using Auction_Web_App.Models.Entity;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.DataAnnotations;

namespace Auction_Web_App.Models
{
    public class Auction
    {
        public int Id { get; set; }
        public string CurrentPrice { get; set; }
        public string Status { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; } = DateTime.MinValue;
        [Required]
        public string? UserId { get; set; }
        [ForeignKey("ApplicationUser")]
        public User? User { get; set; }

        public int? CoinsId { get; set; }

        public CoinsEntity? CoinsEntity { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}
