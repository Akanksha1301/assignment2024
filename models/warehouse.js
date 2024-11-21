const mongoose = require('mongoose');

const WarehouseSchema = new mongoose.Schema({
    name: String,
    location: { lat: Number, lng: Number },
});

module.exports = mongoose.model('Warehouse', WarehouseSchema,'warehouse');