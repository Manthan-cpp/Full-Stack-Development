const express=require('express');
const app=express();
const userModel=require('./usermodel');
app.get('/',(req,res)=>{
    res.send("hey");
})
app.get('/create', async (req,res)=>{
    const createduser=await userModel.create({
        name:"Manthan",
        email:"manthanjswl@gmail.com",
        username: "manthan"
    })
    res.send(createduser);
})
app.get('/update', async (req,res)=>{
    let updateduser= await userModel.findOneAndUpdate({username:"manthan"},{username:"BATMAN"},{new:true})
    res.send(updateduser);    
})
app.get('/read', async (req,res)=>{
    let users= await userModel.find();
    res.send(users);
})
app.get('/delete', async (req,res)=>{
    let users= await userModel.findOneAndDelete({username:"BATMAN"});
    res.send(users);
})
app.listen(3000);