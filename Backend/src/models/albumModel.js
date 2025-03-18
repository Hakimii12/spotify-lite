import mongoose from "mongoose";
const albumSchema=mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    desc:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    }
})
const AlbumModel=mongoose.model("Album",albumSchema)
export default AlbumModel;