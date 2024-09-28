namespace Auction_Web_App.Dto.Coin
{
    public class CoinDto
    {
        public int Id { get; set; }
        public string Lot { get; set; } = string.Empty;
        public string Title { get; set; } = string.Empty;
        public string Image { get; set; } = string.Empty;
        public decimal CurrentMarketPrice { get; set; }
        public string Condition { get; set; } = string.Empty;
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public int? StyleId { get; set; }
        public int? MediumId { get; set; }
        public string UserId { get; set; } = string.Empty;
    }
}
