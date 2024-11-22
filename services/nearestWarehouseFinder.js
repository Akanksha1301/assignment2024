const { calculateDistance } = require('./distanceCalculator');
const Warehouse = require('../models/warehouse'); 

module.exports = (sellerLocation) => { 
    return Warehouse.find()
        .then((warehouses) => {
            let nearest = null;
            let minDistance = Infinity;

            warehouses.forEach((warehouse) => {
                const dist = calculateDistance(sellerLocation, warehouse.location);
                console.log('dwed')
                console.log('dist',dist)
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
