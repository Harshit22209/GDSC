const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");

const app=express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));


app.get("/",function(req,res){
    res.sendFile(__dirname+"/index.html");
});
app.post("/",function(req,res){
    console.log("hi");
    res.sendFile(__dirname+"/donate.html");
    
});

app.get("/amount",function(req,res){
    console.log("hi");
    
    res.sendFile(__dirname+"/amount.html");
    
});
app.get("/fodder",function(req,res){
    console.log("hi");
    
    res.sendFile(__dirname+"/fodder.html");
    
});
app.get("/medicine",function(req,res){
    console.log("hi");
    
    res.sendFile(__dirname+"/medicine.html");
    
});
app.get("/payment",function(req,res){
    console.log("hi");
    
    res.sendFile(__dirname+"/payment.html");
    
});
app.listen(3000,function(){
    console.log("Server is running on port 3000")
});