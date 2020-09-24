
require('dotenv').config();
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
},(err)=>{
    if(err !==null){
        console.log('DB is not connected');

    }
    console.log('DB is coonnected');
}
);


app.get('/',(req,res)=>{
    res.send('you are welcome');
})

//models start

const Schema={
    name:String,
    address:String,
     city:String,
     country:String,
    stars:Number,
    cuisine:String,
    priceCategory:Number
};
// const Schema = new mongoose.Schema(schema);
const RestaurantModel = mongoose.model("Restaurant", Schema);
// const Restaurants=mongoose.model('Restaurants',restaurantsSchema);




//models enda
app.get('/restaurants/:id',(req,res)=>{
    console.log('req.body',req.params);
    Restaurant.findById(req.params.id, (err,restaurant)=>{
        if(err !==null){
            res.json({
                success:false,
                message:err.toString()
            });
            return;
        }
        res.json({
            success:true,
            data:restaurant
    
        });

    });

})

app.get('/restaurant',(req,res)=>{
    RestaurantModel.find({}, (err,restaurant)=>{
        if(err !==null){
            res.json({
                success:false,
                message:err.toString()
            });
            return;
        }
        res.json({
            success:true,
            data:restaurant
        });

    });
});

app.post('/restaurant',(req,res)=>{
    console.log('/restaurant req.body',req.body);
 const {
    name='',
    address='',
     city='',
     country='',
    stars='',
    cuisine='',
    priceCategory=''
   }=req.body
const restaurant=new RestaurantModel({
    name,
    address,
     city,
     country,
    stars,
    cuisine,
    priceCategory
})

 restaurant.save((err,restaurants)=>{
     if(err !==null){
        res.json({
            success:false,
            message:err.toString()
        });
        return;
    }

    res.json({
        success:true,
        data:restaurants,
    });
});

});
//controllers routes start
//contrloleur end


app.listen(port, ()=>{
    console.log(`Server started on port : ${port}!`)
});

