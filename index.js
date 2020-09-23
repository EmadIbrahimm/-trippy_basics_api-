require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");


const port = process.env.PORT || 3000;


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) =>{
    console.log('GET /', req.body)
    res.send('bonjour')
});


app.listen(port, ()=>{
    console.log(`Server started on port : ${port}!`)
});