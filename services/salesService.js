const salesModel = require('../models/salesModel');

const addSale = async (itemsSold) => salesModel.addSale(itemsSold);

module.exports = { addSale };
