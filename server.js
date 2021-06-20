const fetch = require("node-fetch");
const express=require("express");
const bodyParser=require("body-parser");
const request=require("request");
const app=express();
app.set("view engine","ejs");

app.use(bodyParser.urlencoded({extended:true}));

//home route
app.get("/",function(req,res){
res.render("index",{answer:":"})
});

//post request 
app.post("/",function(req,res){

    var from=req.body.from;
    var to=req.body.to;
    var baseUrl=`http://free.currconv.com/api/v7/convert?q=${from}_${to}&compact=ultra&apiKey=079083c6101ed11e8631`;

    fetch(baseUrl)
.then((response)=>{
    return response.json();
    
})
.then((data)=>{
    
    res.render("index",{answer:data[from +"_" +to]})
})

});

app.listen(3008,function(){
    console.log("server start at 3008");
});