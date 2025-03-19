import express from 'express'
import { AddMusic, MusicList } from '../controllers/musicController.js'
import Upload from '../middlewares/multer.js'
const Routes=express.Router()
Routes.post('/music/add',Upload.fields([{name:'image',maxCount:1},{name:'file',maxCount:1}]),AddMusic)
Routes.get('/music/list',MusicList)
export default Routes