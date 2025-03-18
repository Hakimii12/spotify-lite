import multer from "multer";
var Storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./Uploads')
    },
    filename:function(req,file,cb){
        cb(null,file.fieldname+"_"+Date.now()+"_"+file.originalname)
    }
})
var Upload=multer({storage:Storage})
export default Upload