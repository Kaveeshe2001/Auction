using Auction_Web_App.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Auction_Web_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoinsEntityController : ControllerBase
    {
        private readonly ApplicationDBContext dbContext;
        public CoinsEntityController(ApplicationDBContext dbContext)
        {
            this.dbContext = dbContext;
        }
        
        [HttpGet]
        public IActionResult GetAllCoins()
        {

            return Ok(dbContext.CoinsEntity.ToList());
        } 
    }
}
