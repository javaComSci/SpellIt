using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace SpellItBackend.Models {
    public class Word {

        [Key]
        public int WordId { get; set; }

        [Required]
        public int WordListId { get; set; }

        [Required]
        public string WordName { get; set; }
    }
}