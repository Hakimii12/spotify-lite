import SongModel from "../models/songModel.js"
import cloudinary from "../Database/cloudinary.js";
export async function AddMusic(req,res){
    console.log("Request Body:", req.body);
    console.log("Request File:", req.files.image[0]);
    console.log(req.files.file[0])
    if(!req.body.name ||!req.body.desc ||!req.files.image[0].filename|| !req.body.album || !req.files.file[0].filename){
        return res.status(400).json({message:"please enter all requered information"})
    }
    const imageFile=req.files.image[0];
    const audioFile=req.files.file[0];
    const imageResult = await cloudinary.uploader.upload(imageFile.path,{resource_type:"auto"})
    const musicResult=await cloudinary.uploader.upload(audioFile.path,{resource_type:"auto"})
    const duration=`${Math.floor(musicResult.duration/60)}:${Math.floor(musicResult.duration%60)}`
    const song=new SongModel({
        name:req.body.name,
        desc:req.body.desc,
        image:imageResult.secure_url,
        album:req.body.album,
        file:musicResult.secure_url,
        duration:duration
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
