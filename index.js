const express=require('express')
const connectDB = require('./config/db');
const warehouseRoute=require('./routes/warehouse')
const shippingRoute=require('./routes/shipping')
const app=express()
app.use(express.json());


app.use('/api/v1/warehouse',warehouseRoute);
app.use('/api/v1/shipping-charge',shippingRoute);
connectDB();
app.listen(8000,() => {
    console.log("server started")
})
