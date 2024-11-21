const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
    name: String,
    location: { lat: Number, lng: Number },
});

module.exports = mongoose.model('Seller', SellerSchema);