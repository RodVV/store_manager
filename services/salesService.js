const salesModel = require('../models/salesModel');

const addSale = async (sale) => salesModel.addSale(sale);

module.exports = { addSale };
