const express = require("express");
const errorHandler = require("./middleWare/errorHandler");
const dotenv = require('dotenv').config()
const port = process.env.PORT ||5000;
const app = express();
app.use(express.json());    
app.use('/api/contacts/',require('./routes/contactRoute'));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`There server is running in 8080`);
});

