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








var arr=[];

fs.readdir("public/images/categories/jeans",function(err,data){
    if(err){
        console.log("unable to read file");
    }
    else{
        data.forEach(element => {
            var obj={
                add:"images/categories/jeans/"+element,
                price:Math.floor(Math.random()*(2500-1500+1)+1500)

            }
            arr.push(obj);
            
        });
        const newCatName=new catName({
            catName:"jeans",
            detail:arr
            
            
        });
        
        
      newCatName.save();
        
    }
});





