const salesModel = require('../models/salesModel');

const getAllSales = async () => salesModel.getAllSales();
const getSalesById = async (id) => salesModel.getSalesById(id);
const addSale = async (itemsSold) => salesModel.addSale(itemsSold);
const eraseSale = async (id) => {
  const result = await salesModel.eraseSale(id);
  if (result.affectedRows === 0) return false;
  return true;
};

module.exports = { addSale, getAllSales, getSalesById, eraseSale };
