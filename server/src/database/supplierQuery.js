export const supplierQueries = {
    getAllSupplier: "SELECT * FROM Supplie",
    getSuplier: "SELECT * FROM Supplie WHERE [SupplieID] = @supplieID",
    createSupplier: "INSERT INTO [Supplie]([name],[address],[phone],[email]) VALUES (@name,@address,@phone,@email)",
    updateSupplier: "UPDATE [Supplie] SET [name] = @name ,[address] = @address ,[phone] = @phone,[email] = @emailWHERE SupplieID = @supplieID",
    deleteSupplier: "",
}