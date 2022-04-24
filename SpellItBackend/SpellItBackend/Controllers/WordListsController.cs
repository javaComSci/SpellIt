using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SpellItBackend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.IdentityModel.Tokens;
using Microsoft.AspNetCore.Authorization;

namespace SpellItBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WordListsController : ControllerBase
    {
        private readonly ILogger<WordListController> _logger;

        private WordsContext _context;


        public WordListsController(WordsContext context, ILogger<WordListController> logger)
        {
            _logger = logger;
            _context = context;
        }

        [Authorize]
        [HttpGet]
        public async Task<IEnumerable<WordList>> Get()
        {
            var objectId = HttpContext.User?.Claims?.FirstOrDefault(c => c.Type.Equals("http://schemas.microsoft.com/identity/claims/objectidentifier", StringComparison.OrdinalIgnoreCase))?.Value;
            Console.WriteLine("Oid" + objectId);

            var userWordLists = await _context.WordLists
                .Where(x => x.ObjectId == objectId)
                .ToListAsync();

            return userWordLists;
        }
    }
}
