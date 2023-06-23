import { getConnection, sql } from "../database/configuration/connection";
import { productQueries } from "../database/productQuery";


export const getTopProduct= async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .query(productQueries.getTopProduct);
    res.json(result.recordset);
  } catch (error) {
    res.status(500);
    res.send(error.message);
  }
};
