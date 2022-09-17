const mongoose =require('mongoose');
const fs=require('fs');


mongoose.connect('mongodb://localhost:27017/users');

const catSchema=new mongoose.Schema({
    add:String,
    price:Number
});
const catModel=new mongoose.model('categories',catSchema);

const catNameSchema=new mongoose.Schema({
    catName:String,
    detail:[catSchema]

})

const catName=new mongoose.model('catName',catNameSchema);

catName.find({catName:"haircare"},function(err,list){
    if(err){
        console.log(err);
    }
    else{
        list[0].detail.forEach(element => {
            console.log(element.add +"   "+element.price);
        });
    }
})