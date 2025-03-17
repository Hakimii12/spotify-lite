import express from 'express'
import dotenv from 'dotenv';
import Data from './Database/data.js'
dotenv.config();
const app=express();
app.use(express.json());
app.get('/',(req,res)=>{
    res.send("hello world!")
})
const port = process.env.PORT
console.log(port)
app.listen(port,()=>{
    console.log(`server is running on ${port}`)
})
//intiating a database connection
Data()