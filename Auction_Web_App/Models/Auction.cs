namespace Auction_Web_App.Models
{
    public class Auction
    {
        public int Id { get; set; }
        public string Status { get; set; } = string.Empty;
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; } = DateTime.MinValue;
        public int CreatorId { get; set; }
        public int CoinId { get; set; }
        public DateTime CreatedDate { get; set; } = DateTime.Now;
    }
}
