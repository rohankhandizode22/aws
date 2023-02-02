const express=require('express');
const app=express();
app.get("/",(req,res)=>{
    res.status(200).json({"message":"Express API"})
})
app.get("/products",(req,res)=>{
    res.status(200).json({"message":"Fetch Products"})
})
app.post("/addproduct",(req,res)=>{
    res.status(200).json({"message":"Add Products"})
})
app.delete("/deleteproduct",(req,res)=>{
    res.status(200).json({"message":"Delete Products"})
})
app.put("/updateproduct",(req,res)=>{
    res.status(200).json({"message":"Update Products API"})
})
// const PORT=8899;
// app.listen(PORT,()=> console.log("Work on "+PORT))
module.exports=app;