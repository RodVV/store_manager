const express = require('express');
const salesController = require('../controllers/salesController');
const salesValidation = require('../middlewares/salesValidation');

const route = express.Router();

route.post('/', salesValidation.saleValidation, salesController.addSale);

module.exports = route;
