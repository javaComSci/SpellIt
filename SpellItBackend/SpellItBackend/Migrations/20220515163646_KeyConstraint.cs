using Microsoft.EntityFrameworkCore.Migrations;

namespace SpellItBackend.Migrations
{
    public partial class KeyConstraint : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateIndex(
                name: "IX_Words_WordListId",
                table: "Words",
                column: "WordListId");

            migrationBuilder.AddForeignKey(
                name: "FK_Words_WordLists_WordListId",
                table: "Words",
                column: "WordListId",
                principalTable: "WordLists",
                principalColumn: "WordListId",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Words_WordLists_WordListId",
                table: "Words");

            migrationBuilder.DropIndex(
                name: "IX_Words_WordListId",
                table: "Words");
        }
    }
}
