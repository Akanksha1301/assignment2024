const express = require('express');
const { getNearestWarehouse } = require('../controllers/warehouseController');

const router = express.Router();

// route call to get the nearest warehouse for the seller
router.get('/nearest', getNearestWarehouse);
module.exports = router;

