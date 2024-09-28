using Auction_Web_App.Dto.Coin;
using Auction_Web_App.Models;

namespace Auction_Web_App.Mappers
{
    public static class CoinMappers
    {
        public static CoinDto ToCoinDto(this Coin coinModel)
        {
            return new CoinDto
            {
                Id = coinModel.Id,
                Lot = coinModel.Lot,
                Title = coinModel.Title,
                Image = coinModel.Image,
                CurrentMarketPrice = coinModel.CurrentMarketPrice,
                Condition = coinModel.Condition,
                CreatedOn = coinModel.CreatedOn,
                StyleId = coinModel.StyleId,
                MediumId = coinModel.MediumId,
                UserId = coinModel.UserId,

            };
        }

        public static Coin ToCoinFromCreate(this CreateCoinRequestDto coinDto, string userId)
        {
            string uniqueLot = GenerateUniqueLot();

            return new Coin
            {
                Lot = uniqueLot,
                Title = coinDto.Title,
                Image = coinDto.Image,
                CurrentMarketPrice = coinDto.CurrentMarketPrice,
                Condition = coinDto.Condition,
                StyleId = coinDto.StyleId,
                MediumId = coinDto.MediumId,
                UserId = userId
            };
        }

        private static string GenerateUniqueLot()
        {
            const string chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var random = new Random();
            return new string(Enumerable.Repeat(chars, 12)
                .Select(s => s[random.Next(s.Length)]).ToArray());
        }


        public static Coin ToCoinFromUpdate(this UpdateCoinRequestDto coinDto, int id)
        {
            return new Coin
            {
                Title = coinDto.Title,
                Image = coinDto.Image,
                CurrentMarketPrice = coinDto.CurrentMarketPrice,
                Condition = coinDto.Condition,
                StyleId = coinDto.StyleId,
                MediumId = coinDto.MediumId
            };
        }
    }
}
