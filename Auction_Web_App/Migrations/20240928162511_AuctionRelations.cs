using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

#pragma warning disable CA1814 // Prefer jagged arrays over multidimensional

namespace Auction_Web_App.Migrations
{
    /// <inheritdoc />
    public partial class AuctionRelations : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "147f2488-4749-40f1-a52e-73a82c5520b9");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "911bb906-6a4c-4d11-8737-e6efa53797c2");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "618baf54-6349-4711-ba22-11f0c43ab8cf", null, "User", "USER" },
                    { "fce8586d-84d9-4bdd-bd27-5d8b7b1409b7", null, "Admin", "ADMIN" }
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "618baf54-6349-4711-ba22-11f0c43ab8cf");

            migrationBuilder.DeleteData(
                table: "AspNetRoles",
                keyColumn: "Id",
                keyValue: "fce8586d-84d9-4bdd-bd27-5d8b7b1409b7");

            migrationBuilder.InsertData(
                table: "AspNetRoles",
                columns: new[] { "Id", "ConcurrencyStamp", "Name", "NormalizedName" },
                values: new object[,]
                {
                    { "147f2488-4749-40f1-a52e-73a82c5520b9", null, "Admin", "ADMIN" },
                    { "911bb906-6a4c-4d11-8737-e6efa53797c2", null, "User", "USER" }
                });
        }
    }
}
