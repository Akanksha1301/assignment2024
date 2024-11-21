const express=require('express')
const connectDB = require('./config/db');
const warehouseRoute=require('./routes/warehouse')
const app=express()
app.use(express.json());


app.use('/api/v1/warehouse',warehouseRoute);
connectDB();
app.listen(8000,() => {
    console.log("server started")
})
