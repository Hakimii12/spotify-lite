import mongoose from "mongoose";
import dotenv from "dotenv"
import path from "path";
function DatabaseConnection(){
    console.log()
mongoose.connect(process.env.DBCONNECTION_URL);
const db=mongoose.connection;
db.on("error",(error)=>{
    console.log(error)
})
db.once('open',()=>{
    console.log("successfully connected")
})
}
export default DatabaseConnection;