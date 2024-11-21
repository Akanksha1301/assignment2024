const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    dimensions: String,
    sellerId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Product', ProductSchema);