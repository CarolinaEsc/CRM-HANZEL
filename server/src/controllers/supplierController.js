import { supplierQueries } from "../database/supplierQuery";
import { getConnection, sql } from "../database/configuration/connection";

export const getAllSupplier = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(supplierQueries.getAllSupplier);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const getSupplier= async (req, res) => {
  try {
    if (req.body == null) {
      res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    } else {
      const { id } = req.params;
      const pool = await getConnection();
      const result = await pool
        .request()
        .input("supplieID", sql.Int, id)
        .query(supplierQueries.getSuplier);
      res.json(result.recordset);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const createSupplier = async (req, res) => {
  try {
    if (req.body == null) {
      res.status(400).json({ msg: "Bad Request. Please fill all fields" });
    } else {
      const pool = await getConnection();
      var result = await pool
        .request()
        .input("name", sql.VarChar, req.body.name)
        .input("address", sql.VarChar, req.body.address)
        .input("phone", sql.VarChar, req.body.phone)
        .input("email", sql.VarChar, req.body.email)
        .query(supplierQueries.createSupplier);
      res.json(req.body);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};

export const updateSupplier = async (req, res) => {
  try {
    const pool = await getConnection();
    const { id } = req.params;
    if (req.body == null || id == null) {
      res.status(400).json(msg, "Bad Request undefined Category Or id");
    } else {
      const result = await pool
        .request()
        .input("name", sql.VarChar, req.body.name)
        .input("address", sql.VarChar, req.body.address)
        .input("phone", sql.VarChar, req.body.phone)
        .input("email", sql.VarChar, req.body.email)
        .input("supplieID", sql.Int, id)
        .query(ingredientQueries.updateIngredient);
      res.status(200);
      res.json(result.rowsAffected);
    }
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
