const mongoose = require('mongoose');

// Creating the warehouse Schema using Mongoose
const WarehouseSchema = new mongoose.Schema({
    name: String,
    location: { lat: Number, lng: Number },
});

module.exports = mongoose.model('Warehouse', WarehouseSchema,'warehouse');