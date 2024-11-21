const mongoose = require('mongoose');

const SellerSchema = new mongoose.Schema({
    name: String,
    location: { lat: Number, lng: Number },
});

const Seller = mongoose.model('Seller', SellerSchema, 'seller');
module.exports = Seller;
