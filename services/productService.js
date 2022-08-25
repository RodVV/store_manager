const productModel = require('../models/productModel');

const getAllProducts = async () => productModel.getAllProducts();

const getProductById = async (id) => productModel.getProductById(id);

const addProduct = async (name) => productModel.addProduct(name);

const updateProduct = async ({ name, id }) => {
  const updated = await productModel.updateProduct({ name, id });
  if (!updated.affectedRows) return false;
  return true;
};

const eraseProduct = async (id) => {
  const products = await productModel.getProductById(id);
  if (!products) return null;
  await productModel.eraseProduct(id);
  return { ...products };
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  eraseProduct,
};