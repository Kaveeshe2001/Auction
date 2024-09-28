using Microsoft.AspNetCore.Identity;

namespace Auction_Web_App.Models
{
    public class User : IdentityUser
    {
        public List<Coin> Coin { get; set; } = new List<Coin>();
        public List<Auction> Auction { get; set; } = new List<Auction>();
    }
}
