const { error } = require('console');
const express=require('express')
const connectDB = require('./config/db');

if(connectDB==error){
    console.log("error",error)
}
else{
    console.log('MongoDB connected');
}

const app=express()
app.use(express.json());


app.listen(8000,() => {
    console.log("server started")
})
