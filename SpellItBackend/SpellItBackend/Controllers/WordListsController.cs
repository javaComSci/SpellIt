using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using SpellItBackend.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

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

        [HttpGet]
        public IEnumerable<WordList> Get()
        {
            return _context.WordLists;
        }
    }
}
