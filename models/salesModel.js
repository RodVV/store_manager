const connection = require('./connection');

const addSale = async (sale) => { 
  const [newSale] = await connection.execute(
    `INSERT INTO 
    StoreManager.sales (date) VALUES (NOW());`,
  );

  await sale.forEach(async (product) => {
    await connection.execute(
      `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
       VALUES (?, ?, ?)`,
      [newSale.insertId, product.productId, product.quantity],
    );
  });

  return { id: newSale.insertId };
};

module.exports = { addSale };