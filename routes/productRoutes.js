const express = require('express');
const productController = require('../controllers/index');

const route = express.Router();

route.get('/', productController.getAllProducts);
route.get('/:id', productController.getProductById);

module.exports = route;