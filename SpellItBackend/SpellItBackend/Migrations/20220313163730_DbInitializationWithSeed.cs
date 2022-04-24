using Microsoft.EntityFrameworkCore.Migrations;

namespace SpellItBackend.Migrations
{
    public partial class DbInitializationWithSeed : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "WordLists",
                columns: table => new
                {
                    WordListId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WordListName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_WordLists", x => x.WordListId);
                });

            migrationBuilder.CreateTable(
                name: "Words",
                columns: table => new
                {
                    WordId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    WordListId = table.Column<int>(type: "int", nullable: false),
                    WordName = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Words", x => x.WordId);
                });

            migrationBuilder.InsertData(
                table: "WordLists",
                columns: new[] { "WordListId", "WordListName" },
                values: new object[] { 1, "vegetables" });

            migrationBuilder.InsertData(
                table: "Words",
                columns: new[] { "WordId", "WordListId", "WordName" },
                values: new object[] { 1, 1, "avacado" });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "WordLists");

            migrationBuilder.DropTable(
                name: "Words");
        }
    }
}
