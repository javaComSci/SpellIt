using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;

namespace SpellItBackend.Models {
    public class WordsContext : DbContext {
        public DbSet<WordList> WordLists { get; set; }
        public DbSet<Word> Words { get; set; }

        public WordsContext(DbContextOptions<WordsContext> options)
           : base(options)
        {
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            // modelBuilder.Entity<WordList>().HasData(
            //     new WordList {
            //         WordListId = 1,
            //         WordListName = "vegetables",
            //         OwningUserId = 1
            //     }
            // );

            // modelBuilder.Entity<Word>().HasData(
            // new Word
            //     {
            //         WordId = 1,
            //         WordListId = 1,
            //         WordName = "avacado"
            //     }
            // );
        }
    }
}