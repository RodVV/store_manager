const salesService = require('../services/salesService');

const ERROR_500 = 'Server Error';
// const ERROR_400 = 'Error';

const getAllSales = async (_req, res) => {
  try {
    const result = await salesService.getAllSales();
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_500 }); 
  }
};
 
const getSalesById = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await salesService.getSalesById(id);
    // if (id === 999) {
    //   return res.status(404).json({ message: 'Sale not found' });
    // }
    return res.status(200).json(result);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_500 }); 
  }
};

const addSale = async (req, res) => { 
  try {
    const itemsSold = req.body;
    const newSale = await salesService.addSale(itemsSold);
    return res.status(201).json(newSale);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_500 });    
  }
};

const eraseSale = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await salesService.eraseSale(id);
    if (!result) {
      return res.status(404).json({ message: 'Sale not found' });
    }
    return res.status(204).json();
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_500 });
  }
};

module.exports = { addSale, getAllSales, getSalesById, eraseSale };