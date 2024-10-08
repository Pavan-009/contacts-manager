const express = require("express");
const errorHandler = require("./middleWare/errorHandler");
const connect = require("./config/dbconnection")
const dotenv = require('dotenv').config();
const validateToken = require('./middleWare/validate');
connect();
const app = express();
app.use(express.json());  
const port = process.env.PORT ||5000;  
app.use('/api/contacts/',require('./routes/contactRoute'));
app.use('/api/users/',require('./routes/userRoutes'));
app.use(errorHandler);
app.listen(port,()=>{
    console.log(`There server is running in 8080`);
});

