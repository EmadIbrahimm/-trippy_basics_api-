require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");


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



// models 

const hotelsSchema = new mongoose.Schema({
    name : String,
    address : String,
    city : String,
    country : String,
    stars : Number, 
    hasSpa : Boolean,
    priceCategory : Number
});

const hotels = mongoose.model('hotel', hotelsSchema);



app.post('/hotels', (req, res) =>{
    console.log('post /hotel', req.body)

    const {
        name = '',
        address = '',
        city = '',
        country = '',
        stars = '',
        hasSpa = ''
    } = req.body;
    
    const hotel = new hotelModel({
        name,
        address,
        city,
        country,
        stars,
        hasSpa
    });

    hotel.save((err, hotel)=>{
        if (err) {
            res.json({
                seccess: false,
                message: err.toSting(),
            });
            return;
        }
        res.json({
            seccess : true,
            data : hotel
        });
    });

app.listen(port, ()=>{
    console.log('Server started on :' + '' + PORT)
});








