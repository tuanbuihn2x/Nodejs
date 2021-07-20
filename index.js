var express = require("express");
var app = express();
var port = 5000;
app.listen(port,function (){
    console.log("Server is running....")
});
app.use(express.static("public"));
app.set("view engine","ejs");
app.get("/",function (req,res){
    res.send("<h1>Trang chủ</h1>" +
        "<h1>HIỆN TẠI CÓ 13 TRANG CON</h1>" +
        "<h1>'/buoi-'1, 2, 3-1, 3-2, 4, 6-1, 6-2, 6-3</h1>" +
        "<h1>'/js-buoi-'2, 3-1, 3-2, 4, 5</h1>");
});
app.get("/buoi-1",function (req,res){
    res.sendFile(__dirname+"/public/btvn1.html");
});
app.get("/buoi-2",function (req,res){
    res.sendFile(__dirname+"/public/btvn2.html");
});
app.get("/buoi-3-1",function (req,res){
    res.sendFile(__dirname+"/public/labs3.html");
});
app.get("/buoi-3-2",function (req,res){
    res.sendFile(__dirname+"/public/ast3.html");
});
//var count=0;
var products = [
    {
        id: 1,
        name: "product 1",
        image:"images/ast4/cafe.webp",
    },
    {
        id: 2,
        name: "product 2",
        image:"images/ast4/cafe.webp",
    },
    {
        id: 3,
        name: "product 3",
        image:"images/ast4/cafe.webp",
    },
    {
        id: 4,
        name: "product 4",
        image:"images/ast4/cafe.webp",
    },
]
app.get("/buoi-4",function (req,res){
    //res.sendFile(__dirname+"/public/ast4.html");
    count++;
    res.render("home",{
        products: products, //count: count
    });
});
app.get("/chi-tiet",function (req,res){
    var masp = req.query.id;
    // khi co id, tim kiem theo id trong array
    var p = {};
    for(var i=0;i<products.length;i++){
        if(products[i].id == masp){
            p = products[i];
            break;
        }
    }
    res.render("chitiet",{
        masp:masp,
        p: p
    });
});
app.get("/chi-tiet2/:id",function (req,res){
    var masp = req.params.id;
    var p = {};
    for(var i=0;i<products.length;i++){
        if(products[i].id == masp){
            p = products[i];
            break;
        }
    }
    res.render("chitiet",{
        masp:masp,
        p: p
    });
});
app.get("/buoi-6-1",function (req,res){
    res.sendFile(__dirname+"/public/ast6-1.html");
});
app.get("/buoi-6-2",function (req,res){
    res.sendFile(__dirname+"/public/ast6-2.html");
});
app.get("/buoi-6-3",function (req,res){
    res.sendFile(__dirname+"/public/ast6-3.html");
});
app.get("/js-buoi-2",function (req,res){
    res.sendFile(__dirname+"/public/assignment_js2.html");
});
app.get("/js-buoi-3-1",function (req,res){
    res.sendFile(__dirname+"/public/asm_js3.html");
});
app.get("/js-buoi-3-2",function (req,res){
    res.sendFile(__dirname+"/public/AsmJS 3.html");
});
app.get("/js-buoi-4",function (req,res){
    res.sendFile(__dirname+"/public/weather.html");
});
app.get("/js-buoi-5",function (req,res){
    res.sendFile(__dirname+"/public/asm_js5.html");
});