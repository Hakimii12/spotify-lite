import express from 'express'
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello world!")
})
app.listen('4000',()=>{
    console.log("server is running on 4000")
})