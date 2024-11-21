// const Warehouse = require('../models/Warehouse');
const { calculateDistance } = require('./distanceCalculator');

module.exports = async (sellerLocation) => {
    const warehouses = await Warehouse.find();
    console.log(warehouses)
    console.log("jhdhj")
    let nearest = null;
    let minDistance = Infinity;

    warehouses.forEach(warehouse => {
        const dist = calculateDistance(sellerLocation, warehouse.location);
        console.log(dist)
        console.log("edhkwsdw")
        if (dist < minDistance) {
            minDistance = dist;
            nearest = warehouse;
        }

    });

    return nearest;
};