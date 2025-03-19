import SongModel from "../models/songModel.js"
import cloudinary from "../Database/cloudinary.js";
export async function AddMusic(req,res){
    console.log("Request Body:", req.body);
    console.log("Request File:", req.files.image[0]);
    if(!req.body.name ||!req.body.desc ||!req.files.image[0].filename|| !req.body.album || !req.body.duration || !req.body.file){
        return res.status(400).json({message:"please enter all requered information"})
    }
    const imageFile=req.files.image[0];
    const result = await cloudinary.uploader.upload(imageFile.path,{resource_type:"auto"})
    console.log(result)
    const song=new SongModel({
        name:req.body.name,
        desc:req.body.desc,
        image:result.secure_url,
        album:req.body.album,
        file:req.body.file,
        duration:req.body.duration
    })
    try {
        await song.save()
        res.status(201).json(song)
    } catch (error) {
        res.status(500).json({message:error.message})
    }
}
export async function MusicList(req,res){
    res.send("hello world")
}
