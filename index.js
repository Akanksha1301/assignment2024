const express=require('express')
const app=express()
//  Middleware for parsing the data
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const connectDB = require('./config/db');
const warehouseRoute=require('./routes/warehouse')
const shippingRoute=require('./routes/shipping')


app.use('/api/v1/warehouse',warehouseRoute);
app.use('/api/v1/shipping-charge',shippingRoute);
connectDB();
app.listen(8000,() => {
    console.log("server started")
})
