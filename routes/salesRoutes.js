const express = require('express');
const salesController = require('../controllers/salesController');
const saleValidation = require('../middlewares/salesValidation');

const route = express.Router();

route.post('/', saleValidation.saleValidation, salesController.addSale);

module.exports = route;
