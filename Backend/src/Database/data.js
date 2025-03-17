import mongoose from "mongoose";
import dotenv from "dotenv"
function DatabaseConnection(){
    dotenv.config()
    console.log(process.env.DBCONNECTION_URL)
mongoose.connect("mongodb+srv://hakim127:sp%40123tifyLite@spotifylite.ix8wu.mongodb.net/?retryWrites=true&w=majority&appName=spotifyLite");
const db=mongoose.connection;
db.on("error",(error)=>{
    console.log(error)
})
db.once('open',()=>{
    console.log("successfully connected")
})
}
export default DatabaseConnection;