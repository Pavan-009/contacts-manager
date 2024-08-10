const express = require("express");

const dotenv = require('dotenv').config()


const port = 8080
const app = express();

app.get('/api-contacts/',(req,res)=>{
    res.send({"name" : "Pavan Kumar"})
})


app.listen(port,()=>{
    console.log(`There server is running in 8080`);
});

