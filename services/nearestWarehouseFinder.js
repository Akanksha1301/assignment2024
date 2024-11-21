// const Warehouse = require('../models/Warehouse');
// const { calculateDistance } = require('./distanceCalculator');

// module.exports = async (sellerLocation) => {
//     const warehouses = await Warehouse.find();
//     console.log(warehouses)
//     console.log("warehousesss")
//     let nearest = null;
//     let minDistance = Infinity;

//     warehouses.forEach(warehouse => {
//         const dist = calculateDistance(sellerLocation, warehouse.location);
//         console.log(dist)
//         console.log("distanceee")
//         if (dist < minDistance) {
//             minDistance = dist;
//             nearest = warehouse;
//         }

//     });

//     return nearest;
// };

const { calculateDistance } = require('./distanceCalculator');
const Warehouse = require('../models/warehouse');  // Make sure Warehouse is correctly imported

module.exports = (sellerLocation) => {  // Use a function expression
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
            return {
                    warehouseId: nearest._id,  // Return the _id as warehouseId
                    warehouseLocation: {
                        lat: nearest.location.lat,  // Latitude
                        long: nearest.location.lng  // Longitude
                    }
                };
        })
        .catch((error) => {
            console.error('Error fetching warehouses:', error);
            throw new Error('Error fetching warehouses');
        });
};
