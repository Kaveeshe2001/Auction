namespace Auction_Web_App.Models
{
    public class Medium
    {
        public int Id { get; set; }
        public string MediumType { get; set; } = string.Empty;
        public List<Coin> Coin { get; set; } = new List<Coin>();
    }
}
