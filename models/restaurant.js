// const express = require("express");
const mongoose = require("mongoose");

const restaurant=new mongoose.Schema({
     name:String,
     address:String,
     city:String,
     country:String,
     stars:Number,
     cuisine:String,
     priceCategory:Number
});
const Restaurant=mongoose.model('Restaurant',restaurantSchema);


// const restaurantname=new Restaurant({
// firstname:'',
// firtsname:'',
// surname:'',
// age:Number,
// grade:''
// });
module.exports=Restaurant;
