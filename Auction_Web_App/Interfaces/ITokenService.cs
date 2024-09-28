using Auction_Web_App.Models;

namespace Auction_Web_App.Interfaces
{
    public interface ITokenService
    {
        string CreateToken(User user);
    }
}
