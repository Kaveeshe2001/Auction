using Auction_Web_App.Models;

namespace Auction_Web_App.Interfaces
{
    public interface ICoinRepository
    {
        Task<List<Coin>> GetAllAsync();
        Task<Coin?> GetByIdAsync(int id);
        Task<List<Coin>> GetByUserAsync(string userId); 
        Task<Coin?> UpdateAsync(int id, Coin coinModel);
        Task<Coin> CreateAsync(Coin coinModel);
        Task<Coin?> DeleteAsync(int id);
        Task<bool> StyleExists(int id);
        Task<bool> MediumExists(int id);
    }
}
