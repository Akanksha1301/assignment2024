const { calculateDistance } = require('./distanceCalculator');
const Warehouse = require('../models/warehouse'); 

// calculate the minimum distance among all the possible distances
module.exports = (sellerLocation) => { 
    return Warehouse.find()
        .then((warehouses) => {
            let nearest = null;   // store the entity with minimum distance 
            let minDistance = Infinity;

            warehouses.forEach((warehouse) => {
                const dist = calculateDistance(sellerLocation, warehouse.location);
                // console.log('dist',dist)                          // distance of each warehouse
                // console.log('warehouse id',warehouse._id)         // id of corresponding warehouse
                if (dist < minDistance) {
                    minDistance = dist;
                    nearest = warehouse;
                }
                
            });

            
            let temp={warehouseId: nearest._id,  // Return the _id as warehouseId
                    warehouseLocation: {
                        lat: nearest.location.lat,  // Latitude
                        long: nearest.location.lng  // Longitude
                    }}
            return temp

        })
        .catch((error) => {
            console.error('Error fetching warehouses:', error);
            throw new Error('Error fetching warehouses');
        });
};
