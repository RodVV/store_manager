const salesService = require('../services/salesService');

const ERROR_500 = 'Server Error';
// const ERROR_400 = 'Error';

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

module.exports = { addSale };