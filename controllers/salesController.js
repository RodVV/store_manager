const salesService = require('../services/salesService');

const ERROR_500 = 'Server Error';
const ERROR_404 = 'Product not found';

const addSale = async (req, res) => { 
  try {
    const sale = req.body;
    const newSale = await salesService.addSale(sale);
    if (!newSale) {
      return res.status(404).json({ message: ERROR_404 });
    }
    return res.status(201).json(newSale);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: ERROR_500 });    
  }
};

module.exports = { addSale };