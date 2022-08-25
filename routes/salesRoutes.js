const express = require('express');
const salesController = require('../controllers/salesController');
const salesValidation = require('../middlewares/salesValidation');

const route = express.Router();

route.get('/', salesController.getAllSales);
route.get('/:id', salesController.getSalesById);
route.post('/', salesValidation.saleValidation, salesController.addSale);
route.delete('/:id', salesController.eraseSale);

module.exports = route;
