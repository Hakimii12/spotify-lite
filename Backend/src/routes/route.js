import express from 'express'
import { AddMusic, DeleteList, MusicList } from '../controllers/musicController.js'
import Upload from '../middlewares/multer.js'
import { AddAlbum } from '../controllers/albumControllers.js'
import { ListAlbum } from '../controllers/albumControllers.js'
import { DeleteAlbum } from '../controllers/albumControllers.js'
const Routes=express.Router()
Routes.post('/music/add',Upload.fields([{name:'image',maxCount:1},{name:'file',maxCount:1}]),AddMusic)
Routes.delete('/music/delete/:id',DeleteList)
Routes.get('/music/list',MusicList)
Routes.post('/album/add',Upload.single('image'),AddAlbum)
Routes.get('/album/list',ListAlbum)
Routes.delete('/album/delete/:id',DeleteAlbum)
export default Routes