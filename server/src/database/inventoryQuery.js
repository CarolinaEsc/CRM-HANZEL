export const inventoryQueries = {
    getAllInventory: "SELECT [InventoryID],[IngedientID],N.name AS ingredientName,N.quantityMax AS ingredientMax,N.quantityMin AS ingredientMin,[typeMovement],[quantity],[dateMovement] FROM [Inventory] I INNER JOIN Ingredient N ON I.IngedientID = N.IngredientID",
    getInventory: "SELECT [InventoryID],[IngedientID],N.name AS ingredientName,N.quantityMax AS ingredientMax,N.quantityMin AS ingredientMin,[typeMovement],[quantity],[dateMovement] FROM [Inventory] I INNER JOIN Ingredient N ON I.IngedientID = N.IngredientID WHERE InventoryID = @inventoryID",
    createInventory: "INSERT INTO [dbo].[Inventory] ([IngedientID],[typeMovement],[quantity],[dateMovement]) VALUES (@ingredientID,@typeMovement,@quantity,@dateMovement)",
    updateInventory: "UPDATE [Inventory] SET [IngedientID] = @ingredientID,[typeMovement] = @typeMovement,[quantity] = @quantity,[dateMovement] = @dateMovement WHERE InventoryID = @inventoryID",
    deleteInventory: "",
    alertInventory: "SELECT N.name, N.price, N.buyDate, N.expirationDate, I.quantity, N.quantityMin FROM Ingredient N INNER JOIN Inventory I ON N.IngredientID = I.IngedientID WHERE I.quantity <= N.quantityMin",
}