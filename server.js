const express = require("express");

const dotenv = require('dotenv').config()


const port = 8080
const app = express();

app.use('/api/contacts/',require('./routes/contactRoute'));

app.listen(port,()=>{
    console.log(`There server is running in 8080`);
});

