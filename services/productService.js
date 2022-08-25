const productModel = require('../models/productModel');

const getAllProducts = async () => productModel.getAllProducts();

const getProductById = async (id) => productModel.getProductById(id);

const addProduct = async (name) => productModel.addProduct(name);

module.exports = { getAllProducts, getProductById, addProduct };