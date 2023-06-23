import { ingredientQueries } from "../database/ingredientQuery";
import { getConnection, sql } from "../database/configuration/connection";

export const getAllIngredient = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(ingredientQueries.getAllIngredient);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getTopIngredients = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(ingredientQueries.topIngredients);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};


export const getIngredient = async (req, res) => {
  try {
    if (req.body == null) {
      res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    } else {
      const { id } = req.params;
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("ingredientID", sql.Int, id)
        .query(ingredientQueries.getIngredient);
      res.json(result.recordset);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createIngredient = async (req, res) => {
  try {
    if (req.body == null) {
      res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    } else {
      const pool = await getConnection();
      var result = await pool
        .request()
        .input("name", sql.VarChar, req.body.name)
        .input("quantityAllow", sql.Int, req.body.quantityAllow)
        .input("quantityMax", sql.Int, req.body.quantityMax)
        .input("quantityMin", sql.Int, req.body.quantityMin)
        .input("unit", sql.VarChar, req.body.unit)
        .input("buyDate", sql.Date, req.body.buyDate)
        .input("expirationDate", sql.Date, req.body.expirationDate)
        .input("supplieID", sql.Int, req.body.supplieID)
        .input("price", sql.Decimal, req.body.price)
        .query(ingredientQueries.createIngredient);
      res.json(req.body);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateIngredient = async (req, res) => {
  try {
    const pool = await getConnection();
    const { id } = req.params;
    if (req.body == null || id == null) {
      res.status(400).json(msg, "Bad Request undefined Category Or id");
    } else {
      const result = await pool
        .request()
        .input("name", sql.VarChar, req.body.name)
        .input("quantityAllow", sql.Int, req.body.quantityAllow)
        .input("quantityMax", sql.Int, req.body.quantityMax)
        .input("quantityMin", sql.Int, req.body.quantityMin)
        .input("unit", sql.VarChar, req.body.unit)
        .input("buyDate", sql.Date, req.body.buyDate)
        .input("expirationDate", sql.Date, req.body.expirationDate)
        .input("supplieID", sql.Int, req.body.supplieID)
        .input("price", sql.Decimal, req.body.price)
        .input("ingredientID", sql.Int, id)
        .query(ingredientQueries.updateIngredient);
      res.status(200);
      res.json(result.rowsAffected);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
