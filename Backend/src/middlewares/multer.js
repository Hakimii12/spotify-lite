import multer from "multer";
var Storage=multer.diskStorage({
    filename:function(req,file,cb){
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname)
    }
})
var Upload=multer({storage:Storage}).single('image')
export default Upload