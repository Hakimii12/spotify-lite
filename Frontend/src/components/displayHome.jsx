import React from 'react'
import Navbar from './navbar'
import  {albumsData} from '../assets/frontend-assets/assets'
import AlbumItems from './AlbumItems'
import { songsData } from '../assets/frontend-assets/assets'
import SongItems from './songItems'
import { contextProvider } from '../context/constextApi'
import { useContext } from 'react'
function displayHome() {
  const {music,album}=useContext(contextProvider)
  return (
  <><Navbar/>
  <div className="mb-4">
    <h1>Featured charts</h1>
    <div className="flex overflow-auto">
      {music.map((items,index)=>(
    <AlbumItems id={index} image={items.image} name={items.name} desc={items.desc}/>
   ))}
    </div>
  </div>
  <div className="mb-4">
    <h1>Todays biggest hits</h1>
    <div className="flex overflow-auto">
      {music.map((items,index)=>(
    <SongItems id={index} image={items.image} name={items.name} desc={items.desc}/>
   ))}
    </div>
  </div>
  </>
  )
}

export default displayHome
