using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace SpellItBackend.Models {
    public class WordList {

        [Key]
        public int WordListId { get; set; }

        [Required]
        public string WordListName { get; set; }

        [Required]
        public int OwningUserId { get; set; }
    }
}