using Auction_Web_App.Data;
using Auction_Web_App.Dto.CoinsEntity;
using Auction_Web_App.Models;
using Auction_Web_App.Models.Entity;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Threading.Tasks;

namespace Auction_Web_App.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CoinsEntityController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        private readonly UserManager<User> _userManager;

        public CoinsEntityController(ApplicationDBContext dbContext, UserManager<User> userManager)
        {
            _dbContext = dbContext;
            _userManager = userManager;
        }

        [HttpGet]
        public async Task<IActionResult> GetAllCoins()
        {
            var coins = await _dbContext.CoinsEntity.ToListAsync();
            return Ok(coins);
        }

        [HttpPost]
        [Authorize]
        public async Task<IActionResult> AddCoins(AddCoinsDto addCoinsDto)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var user = await _userManager.GetUserAsync(User);
            if (user == null)
            {
                return Unauthorized("User not found.");
            }

            var coinsEntity = new CoinsEntity
            {
                Id = Guid.NewGuid(),
                Lot = addCoinsDto.Lot,
                Title = addCoinsDto.Title,
                Image = addCoinsDto.Image,
                Description = addCoinsDto.Description,
                Category = addCoinsDto.Category,
                CurrentPrice = addCoinsDto.CurrentPrice,
                Condition = addCoinsDto.Condition,
                CreatedOn = DateTime.Now,
                UserId = user.Id
            };

            try
            {
                _dbContext.CoinsEntity.Add(coinsEntity);
                await _dbContext.SaveChangesAsync();
                return CreatedAtAction(nameof(GetCoinById), new { id = coinsEntity.Id }, coinsEntity);
            }
            catch (DbUpdateException ex)
            {
                return BadRequest($"Error saving to database: {ex.InnerException?.Message ?? ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetCoinById(Guid id)
        {
            var coin = await _dbContext.CoinsEntity.FindAsync(id);
            if (coin == null)
            {
                return NotFound();
            }
            return Ok(coin);
        }

        [HttpPut("{id}")]
        [Authorize]
        public async Task<IActionResult> UpdateCoins(Guid id, UpdateCoinsDto updateCoinsDto)
        {
            var coin = await _dbContext.CoinsEntity.FindAsync(id);
            if (coin == null)
            {
                return NotFound();
            }

            var user = await _userManager.GetUserAsync(User);
            if (user == null || coin.UserId != user.Id)
            {
                return Unauthorized("You are not authorized to update this coin.");
            }

            coin.Lot = updateCoinsDto.Lot;
            coin.Title = updateCoinsDto.Title;
            coin.Image = updateCoinsDto.Image;
            coin.Description = updateCoinsDto.Description;
            coin.Category = updateCoinsDto.Category;
            coin.CurrentPrice = updateCoinsDto.CurrentPrice;
            coin.Condition = updateCoinsDto.Condition;

            await _dbContext.SaveChangesAsync();
            return Ok(coin);
        }

        [HttpDelete("{id}")]
        [Authorize]
        public async Task<IActionResult> DeleteCoins(Guid id)
        {
            var coin = await _dbContext.CoinsEntity.FindAsync(id);
            if (coin == null)
            {
                return NotFound();
            }

            var user = await _userManager.GetUserAsync(User);
            if (user == null || coin.UserId != user.Id)
            {
                return Unauthorized("You are not authorized to delete this coin.");
            }

            _dbContext.CoinsEntity.Remove(coin);
            await _dbContext.SaveChangesAsync();
            return NoContent();
        }
    }
}