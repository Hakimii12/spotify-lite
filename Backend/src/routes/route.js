import express from 'express'
import { AddMusic, MusicList } from '../controllers/musicController.js'
import Upload from '../middlewares/multer.js'
const Routes=express.Router()
Routes.post('/music/add',Upload.single('image'),AddMusic)
Routes.get('/music/list',MusicList)
export default Routes