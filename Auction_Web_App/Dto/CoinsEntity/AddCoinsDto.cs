namespace Auction_Web_App.Dto.CoinsEntity
{
    public class AddCoinsDto
    {
        public int Id { get; set; }
        public string Lot { get; set; } 
        public string Title { get; set; }
        public string Image { get; set; }
        public decimal CurrentPrice { get; set; }
        public string Description { get; set; }
        public string Category { get; set; }
        public string Condition { get; set; }
        public DateTime CreatedOn { get; set; } = DateTime.Now;
        public string UserId { get; set; }
    }
}
