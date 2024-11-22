const mongoose=require('mongoose')
const Seller = require('../models/Seller');
const nearestWarehouseFinder=require('../services/nearestWarehouseFinder')

exports.getNearestWarehouse = (req, res) => {
    const { sellerId, productId } = req.query;
    if (!sellerId) {
        return res.status(400).json({ error: 'Missing parameters: sellerId and productId are required' });
    }
    console.log('Seller ID:', sellerId);  // Log the sellerId being used

    Seller.findById(sellerId)
        .then((seller) => {
            if (!seller) {
                console.log('Seller not found:', sellerId);  // Log when seller is not found
                return res.status(404).json({ error: 'Seller not found' });
            }

            console.log('Seller Found:', seller);  // Log the seller data if found

            // fetch location using requet parameters
            const sellerLocation = { lat: seller.location.lat, lng: seller.location.lng };
            console.log('sellerLocation',sellerLocation)
            // Use nearestWarehouseFinder to find the nearest warehouse
            nearestWarehouseFinder(sellerLocation)
                .then((nearest) => {
                    console.log(nearest);
                    res.json({ nearest });
                })
                .catch((error) => {
                    console.error('Error finding nearest warehouse:', error.message);
                    res.status(500).json({ error: error.message });
                });
        })
        .catch((error) => {
            console.error('Error fetching seller:', error.message);
            res.status(500).json({ error: error.message });
        });
};

