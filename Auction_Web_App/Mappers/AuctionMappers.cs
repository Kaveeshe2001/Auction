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
                ArtId = auctionModel.CoinsId,
                CreatedDate = auctionModel.CreatedDate,
            };
        }
        public static Auction ToCreateAuctionDto(this CreateAuctionDto auctionDto, string userId)
        {
            return new Auction
            {
                StartDate = auctionDto.StartDate,
                EndDate = auctionDto.EndDate,
                UserId = userId,
                CoinsId = auctionDto.CoinsId,
            };
        }
        public static Auction ToUpdateAuctionDto(this UpdateAuctionDto auctionDto, int id)
        {
            return new Auction
            {
                Status = auctionDto.Status,
                StartDate = auctionDto.StartDate,
                EndDate = auctionDto.EndDate,
                CoinsId = auctionDto.ArtId
            };
        }
    }
}
