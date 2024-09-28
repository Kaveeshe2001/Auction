using Auction_Web_App.Data;
using Auction_Web_App.Dto.Coin;
using Auction_Web_App.Extensions;
using Auction_Web_App.Interfaces;
using Auction_Web_App.Mappers;
using Auction_Web_App.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;

namespace Auction_Web_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoinController : ControllerBase
    {
        private readonly ApplicationDBContext _context;
        private readonly ICoinRepository _coinRepo;
        private readonly UserManager<User> _userManager;
        public CoinController(ApplicationDBContext context, UserManager<User> userManager, ICoinRepository coinRepo)
        {
            _context = context;
            _coinRepo = coinRepo;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetAll()
        {
            var coins = await _coinRepo.GetAllAsync();
            var coinDto = coins.Select(s => s.ToCoinDto());

            return Ok(coinDto);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById([FromRoute] int id)
        {
            var coin = await _coinRepo.GetByIdAsync(id);

            if (coin == null)
            {
                return NotFound();
            }

            return Ok(coin.ToCoinDto());
        }

        [HttpGet("user/{userId}")]
        public async Task<IActionResult> GetByUser([FromRoute] string userId)
        {
            var coin = await _coinRepo.GetByUserAsync(userId);

            if (coin == null)
            {
                return NotFound();
            }
            return Ok(coin.ToCoinDto());
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> Create(CreateCoinRequestDto coinDto)
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

            var coinModel = coinDto.ToCoinFromCreate(userId);
            await _coinRepo.CreateAsync(coinModel);
            return CreatedAtAction(nameof(GetById), new { id = coinModel.Id }, coinModel.ToCoinDto());
        }

        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete([FromRoute] int id)
        {
            var CoinModel = await _coinRepo.DeleteAsync(id);

            if (CoinModel == null)
            {
                return NotFound();
            }
            return NoContent();

        }

        [HttpPut]
        [Route("{id}")]
        public async Task<IActionResult> Update([FromRoute] int id, UpdateCoinRequestDto coinDto)
        {
            var coinModel = await _coinRepo.UpdateAsync(id, coinDto.ToCoinFromUpdate(id));

            if (coinModel == null)
            {
                return NotFound();
            }

            return Ok(coinModel.ToCoinDto());
        }

    }
}
