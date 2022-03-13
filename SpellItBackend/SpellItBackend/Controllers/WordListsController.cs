using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;

namespace SpellItBackend.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class WordListsController : ControllerBase
    {
        private static readonly string[] DefaultWordList = new[]
        {
            "Avacado", "Think", "Run"
        };

        private readonly ILogger<WordListController> _logger;

        public WordListsController(ILogger<WordListController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        public IEnumerable<string> Get()
        {
            return DefaultWordList;
        }
    }
}
