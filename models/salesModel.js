const connection = require('./connection');

const add = async () => {
  const [result] = await connection.execute(
    'INSERT INTO StoreManager.sales (date) VALUES (NOW());',
  );
  return result.insertId;
};

const addSale = async (itemsSold) => {
  const saleId = await add();
  const saleProduct = `INSERT INTO StoreManager.sales_products (sale_id, product_id, quantity)
       VALUES (?, ?, ?)`;
  // The Promise.all() method takes an iterable of promises as an input,
  // and returns a single Promise that resolves to an array of the results of the input promises.
  Promise.all(
    itemsSold.map((item) =>
      connection.execute(saleProduct, [
        saleId,
        item.productId,
        item.quantity,
      ])),
  );
  const result = { id: saleId, itemsSold };
  return result;
};

module.exports = { addSale };