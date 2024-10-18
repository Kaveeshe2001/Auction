using Auction_Web_App.Data;
using Auction_Web_App.Dto.Auction;
using Auction_Web_App.Extensions;
using Auction_Web_App.Interfaces;
using Auction_Web_App.Mappers;
using Auction_Web_App.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Auction_Web_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuctionController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly IAuctionRepository _auctionRepo;
        private readonly UserManager<User> _userManager;

        public AuctionController(ApplicationDBContext context, IAuctionRepository auctionRepo, UserManager<User> userManager)
        {
            _context = context;
            _auctionRepo = auctionRepo;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var auctions = await _auctionRepo.GetAllAsync();
            var auctionDto = auctions.Select(s => s.ToAuctionDto());

            return Ok(auctionDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id, [FromQuery] QueryObject query)
        {
            var auction = await _auctionRepo.GetByIdAsync(id);

            if (auction == null)
            {
                return NotFound();
            }

            return Ok(auction.ToAuctionDto());
        }

        [HttpGet("coins/{coinsId}")]
        public async Task<IActionResult> GetByCoinId([FromRoute] int coinsId)
        {
            var auction = await _auctionRepo.GetByCoinId(coinsId);

            if (auction == null)
            {
                return NotFound();
            }

            return Ok(auction.ToAuctionDto());
        }

        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetByUser([FromRoute] string userId, [FromQuery] QueryObject query)
        {
            List<Auction> auctions;

            if (query != null)
            {
                auctions = await _auctionRepo.GetByUserAsync(userId, query);
            }
            else
            {
                auctions = await _auctionRepo.GetByUserAsync(userId);
            }

            if (auctions == null || !auctions.Any())
            {
                return NotFound();
            }

            var auctionDto = auctions.Select(a => a.ToAuctionDto()).ToList();

            return Ok(auctionDto);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create(CreateAuctionDto auctionDto)
        {
            var username = User.GetUsername();

            if (string.IsNullOrEmpty(username))
            {
                return BadRequest("Username cannot be null or empty");
            }

            var user = await _userManager.FindByNameAsync(username);

            if (user == null)
            {
                return NotFound("User not found");
            }

            var userId = user.Id;

            var auctionModel = auctionDto.ToAuction(userId);

            if (auctionModel.StartDate.Date < DateTime.Now.Date)
            {
                return BadRequest("Enter a valid Start Date. The Start Date cannot be in the past.");
            }

            if (auctionModel.EndDate <= auctionModel.StartDate)
            {
                return BadRequest("End Date must be later than Start Date.");
            }

            if (auctionModel.StartDate.Date > DateTime.Now.Date)
            {
                auctionModel.Status = "Pending";
            }
            else if (auctionModel.StartDate.Date == DateTime.Now.Date)
            {
                auctionModel.Status = "Active";
            }

            var createdAuction = await _auctionRepo.CreateAsync(auctionModel);
            return CreatedAtAction(nameof(GetById), new { id = createdAuction.Id }, createdAuction.ToAuctionDto());
        }

        [HttpDelete]
        [Route("{id}")]
        [Authorize]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var auctionModel = await _auctionRepo.DeleteAsync(id);

            if (auctionModel == null)
            {
                return NotFound();
            }
            return NoContent();
        }

        [HttpPut]
        [Route("{id}")]
        [Authorize]
        public async Task<IActionResult> Update([FromRoute] int id, UpdateAuctionDto auctionDto)
        {
            var auctionModel = await _auctionRepo.UpdateAsync(id, auctionDto.ToAuction(id));

            if (auctionModel == null)
            {
                return NotFound();
            }
            return Ok(auctionModel.ToAuctionDto());
        }
    }
}