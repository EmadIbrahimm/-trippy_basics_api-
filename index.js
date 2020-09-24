require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
// const Restaurant=require('./models/restaurant');



const Schema = {
    name : String,
    address : String,
    city : String,
    country : String,
    stars : Number, 
    hasSpa : Boolean,
    priceCategory : Number
};

// const Schema = new mongoose.Schema(schema);
const hotelsModel = mongoose.model("hotels", Schema);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/trippy_basics_api",
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


var port = process.env.PORT || 3000;

var app = express();

app.use(express.json());


app.post("/hotels", (req, res) => {   
    const {
        name = '',
        address = '',
        city = '',
        country = '',
        stars = '',
        hasSpa = ''
    } = req.body;

    const hotels = new hotelsModel({
        name,
        address,
        city,
        country,
        stars,
        hasSpa
    });
  
    hotels.save((err, hotels) => {
      res.json({
        success: true,
        data: hotels
      });
    });
  
  });
  

  app.get("/hotels", (req, res)=> {
    hotelsModel.find({},(err, hotels)=> {
        if (err) {
            res.json({
                success : false,
                message : err.toSting()
            });
            return;
        }
      res.json({
        success: true,
        data: hotels
      });
    });
  });
  
  app.get("/hotels/:id", (req, res)=> {

    hotelModel.findOne({ _id: req.params.id }, (err, hotels)=> {
      res.json({
        success: true,
        data: hotels
      });
    });
  });

  app.listen(port, function() {
    console.log('Server started on port:', port );
  });
  