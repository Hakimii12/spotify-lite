import SongModel from "../models/songModel.js"
import Upload from "../middlewares/multer.js"
export async function AddMusic(req,res){
    if(!req.body.name ||!req.body.desc ||!req.body.image || !req.body.album || !req.body.album || !req.body.duration){
        return res.status(400).json({message:"please enter all requered information"})
    }
    const song=new SongModel({
        name:req.body.name,
        desc:req.body.desc,
        image:req.body.image,
        album:req.body.album,
        file:req.body.album,
        duration:req.body.duration
    })
    try {
        await song.save()
        res.status(201).json(song)
    } catch (error) {
        res.status(500).json({message:message.error})
    }
}
export async function MusicList(req,res){
    res.send("hello world")
}
