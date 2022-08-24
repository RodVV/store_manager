const productModel = require('../models/index');

const getAllProducts = async () => productModel.getAllProducts();

const getProductById = async (id) => productModel.getProductById(id);

module.exports = { getAllProducts, getProductById };