using Auction_Web_App.Models;

namespace Auction_Web_App.Interfaces
{
    public interface IAuctionRepository
    {
        Task<List<Auction>> GetAllAsync();
        Task<Auction?> GetByIdAsync(int id);
        Task<Auction?> UpdateAsync(int id, Auction auctionModel);
        Task<Auction> CreateAsync(Auction auctionModel);
        Task<Auction?> DeleteAsync(int id);
        Task<Auction?> GetByCoinId(int id);
        Task<List<Auction>> GetByUserAsync(string userId, QueryObject? queryObject = null);
    }
}