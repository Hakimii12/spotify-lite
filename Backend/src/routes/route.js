import express from 'express'
import { AddMusic, MusicList } from '../controllers/musicController.js'
const Routes=express.Router()
Routes.post('/music/add',AddMusic)
Routes.get('/music/list',MusicList)
export default Routes