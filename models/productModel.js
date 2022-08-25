const connection = require('./connection');

const getAllProducts = async () => {
  const [result] = await connection.execute('SELECT * FROM StoreManager.products;');
  if (result === null) return null;
  // console.log(result);
  return result;
};

const getProductById = async (id) => {
  const [result] = await connection.execute(
    'SELECT * FROM StoreManager.products WHERE id = ?;',
    [id],
  );
  if (!result.length) return null;
  return result[0];
};

const addProduct = async (name) => { 
  const [result] = await connection.execute('INSERT INTO StoreManager.products (name) VALUES (?);',
    [name]);
  return { id: result.insertId, name };
};

const updateProduct = async ({ name, id }) => {
  const [result] = await connection.execute(
    'UPDATE StoreManager.products SET name = ? WHERE id = ?;', [name, id],
  );
  return result;
};

const eraseProduct = async (id) => { 
  const deleted = connection.execute('DELETE FROM StoreManager.products WHERE id = ?;', [id]);
  return deleted;
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  eraseProduct,
};