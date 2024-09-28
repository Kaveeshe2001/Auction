using Microsoft.AspNetCore.Identity;

namespace Auction_Web_App.Models
{
    public class User : IdentityUser
    {
        public List<Art> Art { get; set; } = new List<Art>();
        public List<Auction> Auction { get; set; } = new List<Auction>();
    }
}
