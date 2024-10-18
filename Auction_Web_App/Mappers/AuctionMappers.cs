using Auction_Web_App.Dto.Auction;
using Auction_Web_App.Models;

namespace Auction_Web_App.Mappers
{
    public static class AuctionMappers
    {
        public static AuctionDto ToAuctionDto(this Auction auctionModel)
        {
            return new AuctionDto
            {
                Id = auctionModel.Id,
                Status = auctionModel.Status,
                StartDate = auctionModel.StartDate,
                EndDate = auctionModel.EndDate,
                UserId = auctionModel.UserId,
                CoinsId = auctionModel.CoinsId ?? 0,
                CreatedDate = auctionModel.CreatedDate,
            };
        }

        public static Auction ToAuction(this CreateAuctionDto auctionDto, string userId)
        {
            return new Auction
            {
                StartDate = auctionDto.StartDate,
                EndDate = auctionDto.EndDate,
                UserId = userId,
                CoinsId = auctionDto.CoinsId,
                Status = "Pending", 
                CurrentPrice = "0", 
                CreatedDate = DateTime.Now
            };
        }

        public static Auction ToAuction(this UpdateAuctionDto auctionDto, int id)
        {
            return new Auction
            {
                Id = id,
                Status = auctionDto.Status,
                StartDate = auctionDto.StartDate,
                EndDate = auctionDto.EndDate,
                CoinsId = auctionDto.CoinsId
            };
        }
    }
}