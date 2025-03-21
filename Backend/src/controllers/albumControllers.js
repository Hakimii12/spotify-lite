import AlbumModel from "../models/albumModel.js";
import cloudinary from "../Database/cloudinary.js";
export async function AddAlbum(req,res){
    console.log(req.file)
    if(!req.body.name ||!req.body.desc ||!req.file){
        return res.status(400).json({message:"please enter all requered information"})
    }
    try {
        const albumImage=req.file;
        const albumImageResult=await cloudinary.uploader.upload(albumImage.path,{resource_type:"auto"})
        const albumSong=new AlbumModel({
            name:req.body.name,
            desc:req.body.desc,
            image:albumImageResult.secure_url
        })
        await albumSong.save()
        res.status(201).json({message:"successfully created"})
    } catch (error) {
         res.status(500).json({message:error.message})
    }
}
export async function ListAlbum(req,res) {
    try {
        const album= await AlbumModel.find({})
        res.status(200).json({data:album})
    } catch (error) {
       res.status(500).json({message:error.message}) 
    }
}
export async function DeleteAlbum(req,res) {
    const {id}=req.params
    try {
       await AlbumModel.findByIdAndDelete(id)
       res.status(200).json({message:"album deleted"})
    } catch (error) {
        res.status(500).json({message:error.message})  
    }
}