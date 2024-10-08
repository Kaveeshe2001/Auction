using System.ComponentModel.DataAnnotations;

namespace Auction_Web_App.Dto.Coin
{
    public class CreateCoinRequestDto
    {
        public string Lot { get; set; } = string.Empty;

        [Required]
        [MinLength(5, ErrorMessage = "Title must be at least 5 characters")]
        [MaxLength(280, ErrorMessage = "Title cannot exceed 280 characters")]
        public string Title { get; set; } = string.Empty;

        public string Image { get; set; } = string.Empty;

        [Required]
        public decimal CurrentMarketPrice { get; set; }

        [Required]
        public string Condition { get; set; } = string.Empty;

        [Required]
        public int? StyleId { get; set; }

        public int? MediumId { get; set; }
    }
}
