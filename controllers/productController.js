const productService = require('../services/productService');

const ERROR_500 = 'Server Error';
const ERROR_404 = 'Product not found';

const getAllProducts = async (_req, res) => { 
  try {
    const products = await productService.getAllProducts();
    // if (!products) {
    //   return res.status(404).json(ERROR_404);
    // }
    return res.status(200).json(products);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_500 });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productService.getProductById(id);
    if (!product) {
      return res.status(404).json({ message: ERROR_404 });
    }
    return res.status(200).json(product);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_500 });
  }
};

const addProduct = async (req, res) => {
  const { name } = req.body;
  try {
    const newProduct = await productService.addProduct(name);
    return res.status(201).json(newProduct);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_500 });    
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const product = await productService.updateProduct({ name, id });
    if (!product) {
      return res.status(404).json({ message: ERROR_404 });
    }
    return res.status(200).json({ id: +id, name });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_500 });
  }
};

const eraseProduct = async (req, res) => {
  try {
    const products = await productService.eraseProduct(req.params.id);
    if (!products) return res.status(404).json({ message: ERROR_404 });
    return res.status(204).json();
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: ERROR_500 });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  addProduct,
  updateProduct,
  eraseProduct,
};