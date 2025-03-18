import {v2 as cloudinary} from 'cloudinary'
import dotenv from 'dotenv'
async function Cloudinary(){
      dotenv.config()
      await cloudinary.config({
        CLOUD_NAME:process.env.CLOUD_NAME,
        API_KEY:process.env.API_KEY,
        API_SECRET:process.env.API_SECRET
      })
}
export default Cloudinary