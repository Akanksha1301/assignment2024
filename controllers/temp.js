const mongoose = require('mongoose');
const Seller = require('../models/seller'); // Make sure this points to the correct model file

async function fetchSellers() {
    try {
        // Fetch all sellers
        const sellers = await Seller.find();
        console.log(sellers)
        // console.log('Fetched Sellers:', sellers); // Log all sellers to verify

        // Close connection after fetching
        mongoose.connection.close();
    } catch (error) {
        console.error('Error fetching sellers:', error.message);
    }
}

fetchSellers();
