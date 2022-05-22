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
    public class WordController : ControllerBase
    {
        private static readonly string[] DefaultWordList = new[]
        {
            "Avacado", "Think", "Run"
        };

        private readonly ILogger<WordController> _logger;

        private WordsContext _context;

        public WordController(WordsContext context, ILogger<WordController> logger)
        {
            _logger = logger;
            _context = context;
        }

        [Authorize]
        [HttpPost]
        public void Post([FromBody]WordListCreationInput wordListCreationInput)
        {
            var objectId = HttpContext.User?.Claims?.FirstOrDefault(c => c.Type.Equals("http://schemas.microsoft.com/identity/claims/objectidentifier", StringComparison.OrdinalIgnoreCase))?.Value;

            var wordList = new WordList() {
                WordListName = wordListCreationInput.Name,
                ObjectId = objectId
            };
            var entry = _context.WordLists.Add(wordList);
            _context.SaveChanges();
        }

        [Authorize]
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
            Console.WriteLine("Trying to delete word");
            var objectId = HttpContext.User?.Claims?.FirstOrDefault(c => c.Type.Equals("http://schemas.microsoft.com/identity/claims/objectidentifier", StringComparison.OrdinalIgnoreCase))?.Value;

            var word = _context.Words.Where(x => x.WordId == id).Single<Word>();
            _context.Remove(word);
            _context.SaveChanges();
        }
    }
}
