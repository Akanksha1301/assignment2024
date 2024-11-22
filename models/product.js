const mongoose = require('mongoose');

// Creating the product Schema using Mongoose
const ProductSchema = new mongoose.Schema({
    name: String,
    weight: Number,
    dimensions: String,
    sellerId: mongoose.Schema.Types.ObjectId,
});

module.exports = mongoose.model('Product', ProductSchema);