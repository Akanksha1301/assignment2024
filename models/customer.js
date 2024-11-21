const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: String,
    phone: String,
    location: { lat: Number, lng: Number },
});

module.exports = mongoose.model('Customer', CustomerSchema);