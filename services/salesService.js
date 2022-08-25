const salesModel = require('../models/salesModel');

const getAllSales = async () => salesModel.getAllSales();
const getSalesById = async (id) => salesModel.getSalesById(id);
const addSale = async (itemsSold) => salesModel.addSale(itemsSold);

module.exports = { addSale, getAllSales, getSalesById };
