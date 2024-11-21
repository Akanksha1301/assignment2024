
const express = require('express');
const { calculateShippingCharge,calculateCombinedShipping } = require('../controllers/shippingController');
const router = express.Router();

router.get('/', calculateShippingCharge);
router.post('/calculate',calculateCombinedShipping);

module.exports = router;