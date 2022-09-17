
const express=require('express');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const { json } = require('body-parser');
const ejs=require('ejs');
const fs=require('fs');


mongoose.connect('mongodb://localhost:27017/users');

const app=express();





app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static('public'))

app.set('view engine','ejs');



const userSchema=new mongoose.Schema(
    {
        name:String,
        contactno:Number,
        password:String,
        emain:String
    }
)

const userModel=new mongoose.model('customers',userSchema);


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


app.get("/",function(req,res){
    res.render("login.ejs");
})


app.get("/login",function(req,res){
    res.render("login.ejs");
})

app.post("/login",function(req,res){

    const mobno=req.body.phone;
    const pass=req.body.password;

    
    
    userModel.find(function(err,list){
        var isTrue=false;
        if(err){
            console.log(err);
        }
        else{

           var len=list.length;
            for(var i=0;i<len;i++){
                if(list[i].password == pass && list[i].contactno==mobno)   {
                    isTrue=true;
                    
                }
            };
            if(isTrue){
                fs.readdir("public/images/slides",function(err,slides){
                    if(err){
                        console.log("unable to read file");
                    }
                    else{
                        res.render("homepage.ejs",{src:"images/logo.JPEG",file:slides});
                        
                    }
                });
                
            }
            else{
                res.send("login failed");
            }
        }
    });
    
});

app.get("/signup",function(req,res){
    res.render("signup.ejs");
});


app.post("/signup",function(req,res){
    newUser=new userModel({
        name:req.body.name,
        contactno:req.body.phone,
        password:req.body.password,
        emain:req.body.email
    });
    newUser.save();
    res.redirect("/");
});

app.get("/indianwear",function(req,res){
    
    catName.find({catName:"weddingwear"},function(err,list){
        if(err){
            console.log(err);
        }
        else{
            res.render("wedding.ejs",{data:list});
        }
    })
})

app.get("/kids",function(req,res){
    catName.find({catName:"kids"},function(err,list){
        if(err){
            console.log(err);
        }
        else{
            res.render("kids.ejs",{data:list});
        }
    })
});


app.get("/shoes",function(req,res){
    catName.find({catName:"shoes"},function(err,list){
        if(err){
            console.log(err);
        }
        else{
            res.render("shoes.ejs",{data:list});
        }
    });
});

app.get("/jeans",function(req,res){
    catName.find({catName:"jeans"},function(err,list){
        if(err){
            console.log(err);
        }
        else{
            res.render("jeans.ejs",{data:list});
        }
    });
});


app.get("/haircare",function(req,res){
    catName.find({catName:"haircare"},function(err,list){
        if(err){
            console.log(err);
        }
        else{
            res.render("haircare.ejs",{data:list});
        }
    });
});


app.get("/facecare",function(req,res){
    catName.find({catName:"kg"},function(err,list){
        if(err){
            console.log(err);
        }
        else{
            res.render("facecare.ejs",{data:list});
        }
    });
});

app.get("/buynow",function(req,res){
    var addre=req.query.name;
    var price=req.query.price;
   
    res.render("buynow.ejs",{add:addre,pric:price});
    

});


app.get("/orderformat",function(req,res){
    res.render("orderformat.ejs");
});


app.listen(3000,function(){
    console.log("server is up and listening to port 3000");
})