using System.ComponentModel.DataAnnotations;

namespace Auction_Web_App.Dto.Auction
{
    public class CreateAuctionDto
    {
        [Required]
        public DateTime StartDate { get; set; }
        [Required]
        public DateTime EndDate { get; set; } = DateTime.MinValue;
        [Required]
        public int CoinsId { get; set; }
    }
}
