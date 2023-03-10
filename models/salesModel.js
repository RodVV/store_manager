const connection = require('./connection');

const getAllSales = async () => {
  const [result] = await connection.execute(
    `SELECT sales_products.sale_id AS saleId,
    sales_products.product_id AS productId,
    sales_products.quantity AS quantity,
    sales.date AS date
    FROM StoreManager.sales AS sales 
    INNER JOIN StoreManager.sales_products AS sales_products
    ON sales.id = sales_products.sale_id
    ORDER BY sale_id;`,
  );
  // console.log(result);
  return result;
};
 
const getSalesById = async (saleId) => {
  const [result] = await connection.execute(
    `SELECT pro.product_id AS productId, pro.quantity, sa.date 
    FROM StoreManager.sales AS sa
    INNER JOIN StoreManager.sales_products AS pro ON sa.id = pro.sale_id
    WHERE sale_id = ?;`, [saleId],
  );
  // console.log(result);
  return result;
};

const add = async () => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
  );
  return result.insertId;
};

const addSale = async (itemsSold) => {
  const saleId = await add();

  itemsSold.forEach(async (item) => {
    await connection.execute(
      `INSERT INTO StoreManager.sales_products
      (sale_id, product_id, quantity)
      VALUES (?, ?, ?);`,
      [saleId, item.productId, item.quantity],
    );
  });
 
  const result = { id: saleId, itemsSold };
  return result;
};

const eraseSale = async (id) => {
  const [result] = await connection.execute(
    'DELETE FROM StoreManager.sales WHERE id = ?;',
    [id],
  );
  return result;
};

module.exports = { addSale, getAllSales, getSalesById, eraseSale };