using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.AspNetCore.Authorization;
using SpellItBackend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using System.IdentityModel.Tokens;

namespace SpellItBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WordListController : ControllerBase
    {
        private static readonly string[] DefaultWordList = new[]
        {
            "Avacado", "Think", "Run"
        };

        private readonly ILogger<WordListController> _logger;

        private WordsContext _context;

        public WordListController(WordsContext context, ILogger<WordListController> logger)
        {
            _logger = logger;
            _context = context;
        }

        [Authorize]
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return DefaultWordList;
        }

        [Authorize]
        [HttpPost]
        public void Post([FromBody]string wordlistname)
        {
            var objectId = HttpContext.User?.Claims?.FirstOrDefault(c => c.Type.Equals("http://schemas.microsoft.com/identity/claims/objectidentifier", StringComparison.OrdinalIgnoreCase))?.Value;
            Console.WriteLine("Oid" + objectId);

            var wordList = new WordList() {
                WordListName = wordlistname,
                ObjectId = objectId
            };
            var entry = _context.WordLists.Add(null);
        }
    }
}
