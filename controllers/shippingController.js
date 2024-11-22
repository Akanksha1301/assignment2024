const Customer = require('../models/customer');
const Warehouse = require('../models/warehouse');
const shippingChargeCalculator = require('../services/shippingChargeCalculator');
const axios = require('axios');

// Get the Shipping Charge for a Customer from a Warehouse 
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


//  Get the Shipping Charges for a Seller and Customer
exports.calculateCombinedShipping = (req, res) => {
    const { sellerId, customerId, deliverySpeed } = req.body;
    console.log("sellerid: ",sellerId);
    console.log("cusId: ",customerId);
    console.log("delibe: ",deliverySpeed);

    if (!sellerId || !customerId || !deliverySpeed) {
        return res.status(400).json({ error: 'Missing parameters' });
    }

    // Call the nearest warehouse API
    const nearestWarehouseApiUrl = `http://localhost:8000/api/v1/warehouse/nearest?sellerId=${sellerId}&productId=0`;
    axios
        .get(nearestWarehouseApiUrl)
        .then((nearestWarehouseResponse) => {
            const nearestWarehouse = nearestWarehouseResponse.data;
            console.log(nearestWarehouse.nearest.warehouseId,"dewdaesaaaaaaaaaaaaaaaaaaaaa")
            // Check if nearest warehouse exists
            if (!nearestWarehouse || !nearestWarehouse.nearest.warehouseId) {
                throw new Error('No nearest warehouse found');
            }

            const warehouseId = nearestWarehouse.nearest.warehouseId;

            // Call the shipping charge API
            const shippingChargeApiUrl = `http://localhost:8000/api/v1/shipping-charge?warehouseId=${warehouseId}&customerId=${customerId}&deliverySpeed=${deliverySpeed}`;
            return axios.get(shippingChargeApiUrl).then((shippingChargeResponse) => {
                const shippingCharge = shippingChargeResponse.data.shippingCharge;

                // Combine and send the result
                res.json({
                    nearestWarehouse,
                    shippingCharge,
                });
            });
        })
        .catch((error) => {
            console.error('Error calculating combined shipping:', error.message);
            res.status(500).json({ error: error.message });
        });
};




