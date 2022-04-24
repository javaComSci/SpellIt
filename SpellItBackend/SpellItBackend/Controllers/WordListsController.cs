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


        public WordListsController(ILogger<WordListController> logger, WordsContext context)
        {
            _logger = logger;
            _context = context;
        }

        [Authorize]
        [HttpGet]
        public IEnumerable<WordList> Get()
        {
            Console.WriteLine(HttpContext.User);
            return _context.WordLists;
        }
    }
}
