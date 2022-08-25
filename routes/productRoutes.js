const express = require('express');
const productController = require('../controllers/productController');
const productValidation = require('../middlewares/productValidation');

const route = express.Router();

route.get('/', productController.getAllProducts);
route.get('/:id', productController.getProductById);
route.post('/', productValidation.nameValidation, productController.addProduct);
route.put('/:id', productValidation.nameValidation, productController.updateProduct);
route.delete('/:id', productController.eraseProduct);

module.exports = route;