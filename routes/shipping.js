
const express = require('express');
const { calculateShippingCharge,calculateCombinedShipping } = require('../controllers/shippingController');
const router = express.Router();

// router to get the shipping charge for a customer from a warehouse
router.get('/', calculateShippingCharge);

// router call to get the shipping charges for seller and customer
router.post('/calculate',calculateCombinedShipping);

module.exports = router;