const productService = require('../services/index');

const ERROR_500 = { message: 'Server Error' };
const ERROR_404 = { message: 'Product not found' };

const getAllProducts = async (_req, res) => { 
  try {
    const products = await productService.getAllProducts();
    if (!products) {
      return res.status(404).json(ERROR_404);
    }
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json(ERROR_500);
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json(ERROR_404);
    }
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json(ERROR_500);
  }
};

module.exports = { getAllProducts, getProductById };