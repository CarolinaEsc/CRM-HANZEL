export const productQueries = {
    getTopProduct: "SELECT TOP 5 p.ProductID, p.name, COUNT(od.OrderID) AS TotalSales FROM Product p INNER JOIN OrderDetail od ON p.ProductID = od.ProductID GROUP BY p.ProductID, p.name ORDER BY TotalSales DESC;",
}