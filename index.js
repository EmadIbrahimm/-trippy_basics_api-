require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const Restaurant=require('./models/restaurant');


const port = PORT || 3000;

mongoose.connect(MONGODB_URI || "mongodb://localhost:27017/trippy_basics_api",
    {
        useNewUrlParser: true,
        useCreateIndex: true,
        useUnifiedTopology: true
    }, (err)=>{
        if (!err) {
            console.log('DB is connected !')
        }
    }
);

// creation hotel modèle


const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/', (req, res) =>{
    console.log('GET /', req.body)
    res.send('bonjour')
});

app.listen(port, ()=>{
    console.log('Server started on :' + '' + PORT)
});








