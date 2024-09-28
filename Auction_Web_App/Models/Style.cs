namespace Auction_Web_App.Models
{
    public class Style
    {
        public int Id { get; set; }
        public string StyleType { get; set; } = string.Empty;
        public List<Coin> Coin { get; set; } = new List<Coin>();
    }
}
