using System.ComponentModel.DataAnnotations.Schema;

namespace Auction_Web_App.Models.Entity
{
    public class Comment
    {
        public int Id { get; set; }
        public string Content { get; set; }
        public string? UserId { get; set; }
        [ForeignKey("UserId")]
        public User? User { get; set; }

        public int? CoinsId { get; set; }

        public CoinsEntity? CoinsEntity { get; set; }
    }
}
