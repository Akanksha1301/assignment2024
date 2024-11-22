const { calculateDistance } = require('./distanceCalculator');
const Customer = require('../models/customer');
const Warehouse = require('../models/warehouse');
const { TRANSPORT_RATES } = require('../utils/constants');

module.exports = (warehouseId, customerId, deliverySpeed) => {

    return Warehouse.findById(warehouseId)
        .then((warehouse) => {
            if (!warehouse) {
                throw new Error('Warehouse not found');
            }

            return Customer.findById(customerId)
                .then((customer) => {
                    if (!customer) {
                        throw new Error('Customer not found');
                    }

                    // Calculate distance and rate
                    const distance = calculateDistance(warehouse.location, customer.location);
                    console.log("distance",distance);
                    const rate = distance > 500 ? TRANSPORT_RATES.AEROPLANE : 
                                 distance > 100 ? TRANSPORT_RATES.TRUCK : TRANSPORT_RATES.MINI_VAN;
                    // Example weight, replace with actual product weight when deploy with product route
                    const weight = 10; 
                    console.log("rate",rate);
                    const baseCharge = distance * rate * weight;
                    const extraCharge = deliverySpeed === 'express' ? 10 + 1.2 * weight : 10;
                    console.log(baseCharge,"and",extraCharge," : total charges")
                    return baseCharge + extraCharge;  // Return total charge
                });
        })
        .catch((error) => {
            console.error('Error calculating shipping charge:', error.message);
            throw new Error(error.message);  
        });
};

