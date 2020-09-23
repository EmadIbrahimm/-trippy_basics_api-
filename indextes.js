const express=require('express');
const mongoose=require('mongoose');
const port =process.env.PORT||3000;
const app=express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/restarantapp',
{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
}
);

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


app.post('/restaurants',(req,res)=>{
const restaurantname=new Restaurant({
    name:req.body.name,
    address:req.body.address,
    city:req.body.city,
    country:req.body.country,
    stars:req.body.stars,
    cuisine:req.body.cuisine,
    priceCategory:req.body.priceCategory
});
restaurantname.save((err,restaurant)=>{
    res.json({
        success:true,
        data:restaurant,
    });
});

});


app.listen(port, ()=>{
    console.log(`Server started on port : ${port}!`)
});

