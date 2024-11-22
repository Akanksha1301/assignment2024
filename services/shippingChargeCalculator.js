const { calculateDistance } = require('./distanceCalculator');
const Customer = require('../models/customer');
const Warehouse = require('../models/warehouse');
const { TRANSPORT_RATES } = require('../utils/constants');

// calculating the shipping charge and returning other error messages if not possible to calcuate the charges
module.exports = (warehouseId, customerId, deliverySpeed) => {

    return Warehouse.findById(warehouseId)
        .then((warehouse) => {
            // throw error if warehouse is not present in the db
            if (!warehouse) {
                throw new Error('Warehouse not found');
            }

            return Customer.findById(customerId)
                .then((customer) => {
                    // throw error if customer is not present in the db
                    if (!customer) {
                        throw new Error('Customer not found');
                    }

                    // Calculate distance
                    const distance = calculateDistance(warehouse.location, customer.location);
                    console.log("distance",distance);
                    // calculate rate
                    const rate = distance > 500 ? TRANSPORT_RATES.AEROPLANE : 
                                 distance > 100 ? TRANSPORT_RATES.TRUCK : TRANSPORT_RATES.MINI_VAN;
                    console.log("rate",rate);
                    // Example weight, replace with actual product weight when deploy with product route
                    const weight = 10; 
                    // Calculate baseCharge
                    const baseCharge = distance * rate * weight;
                    // Calculate shipping charge
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

