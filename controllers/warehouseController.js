const Warehouse = require('../models/warehouse');
const Seller=require('../models/seller')

const nearestWarehouseFinder = require('../services/nearestWarehouseFinder');

exports.getNearestWarehouse=async(req,res)=>{
    try{
        const {sellerId,productId}=req.query;
        if (!sellerId || !productId) return res.status(400).json({ error: 'Missing parameters' });
        const sel = await Seller.findbyId(sellerId);
        console.log(sel)
        if (!sel) {
            return res.status(404).json({ error: 'Seller not found' });
        }
        const sellerLocation = {
            lat: sel.location.lat,
            lng: sel.location.lng
        };
        const nearest = await nearestWarehouseFinder(sellerLocation);
        console.log(nearest)
        res.json({ nearest });
        
    }
    catch(error){
        res.status(500).json({ error: error.message });
    }

};