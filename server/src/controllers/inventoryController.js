import { getConnection, sql } from "../database/configuration/connection";
import { inventoryQueries } from "../database/inventoryQuery";

export const getAllInventory= async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(inventoryQueries.getAllInventory);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const alertInventory= async (req, res) => {
    try {
      const pool = await getConnection();
      const result = await pool
        .request()
        .query(inventoryQueries.alertInventory);
      res.json(result.recordset);
    } catch (error) {
      res.status(500);
      res.send(error.message);
    }
  };

export const getInventory = async (req, res) => {
  try {
    if (req.body == null) {
      res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    } else {
      const { id } = req.params;
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("inventoryID", sql.Int, id)
        .query(inventoryQueries.getInventory);
      res.json(result.recordset);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createInventory = async (req, res) => {
  try {
    if (req.body == null) {
      res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    } else {
      const pool = await getConnection();
      var result = await pool
        .request()
        .input("ingredientID", sql.Int, req.body.ingredientID)
        .input("typeMovement", sql.VarChar, req.body.typeMovement)
        .input("quantity", sql.Int, req.body.quantity)
        .input("dateMovement", sql.Date, req.body.dateMovement)
        .query(inventoryQueries.createInventory);
      res.json(req.body);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateInventory = async (req, res) => {
  try {
    const pool = await getConnection();
    const { id } = req.params;
    if (req.body == null || id == null) {
      res.status(400).json(msg, "Bad Request undefined Category Or id");
    } else {
      const result = await pool
        .request()
        .input("ingredientID", sql.Int, req.body.ingredientID)
        .input("typeMovement", sql.VarChar, req.body.typeMovement)
        .input("quantity", sql.Int, req.body.quantity)
        .input("dateMovement", sql.Date, req.body.dateMovement)
        .input("inventoryID", sql.Int, id)
        .query(inventoryQueries.updateInventory);
      res.status(200);
      res.json(result.rowsAffected);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


