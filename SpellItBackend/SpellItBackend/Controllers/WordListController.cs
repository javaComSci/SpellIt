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
            Console.WriteLine("Trying to delete");
            var objectId = HttpContext.User?.Claims?.FirstOrDefault(c => c.Type.Equals("http://schemas.microsoft.com/identity/claims/objectidentifier", StringComparison.OrdinalIgnoreCase))?.Value;

            var list = _context.WordLists.Where(x => x.WordListId == id).Single<WordList>();
            _context.Remove(list);
            _context.SaveChanges();
        }

        [Authorize]
        [HttpGet("{id}")]
        public async Task<IEnumerable<Word>> Get(int id)
        {
            var objectId = HttpContext.User?.Claims?.FirstOrDefault(c => c.Type.Equals("http://schemas.microsoft.com/identity/claims/objectidentifier", StringComparison.OrdinalIgnoreCase))?.Value;
                
            var wordListExist = await _context.WordLists.Where(x => x.WordListId == id && x.ObjectId == objectId).ToListAsync();            
            if (wordListExist.Count > 0) {
                var words= await _context.Words.Where(x => x.WordListId == id).ToListAsync();
                return words;
            }
            else {
                return new List<Word>();
            }
        }
    }
}
