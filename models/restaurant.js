const express = require("express");
const mongoose = require("mongoose");

const restaurant=new mongoose.Schema({
    firtsname:String,
    surname:String,
    age:Number,
    grade:String
});
const Restaurant=mongoose.model('Restaurant',restaurantSchema);

module.exports = Restaurant;