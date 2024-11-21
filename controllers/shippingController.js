const Customer = require('../models/customer');
const Warehouse = require('../models/warehouse');
const shippingChargeCalculator = require('../services/shippingChargeCalculator');

exports.calculateShippingCharge = (req, res) => {
    const { warehouseId, customerId, deliverySpeed } = req.query;
    if (!warehouseId || !customerId || !deliverySpeed) {
        return res.status(400).json({ error: 'Missing parameters' });
    }
    shippingChargeCalculator(warehouseId, customerId, deliverySpeed)
    .then((charge)=>{
        res.json({ shippingCharge: charge });
    })
    .catch((error) => {
        console.error('Error calculating shipping charge:', error.message);
        res.status(500).json({ error: error.message });
    });    
};



