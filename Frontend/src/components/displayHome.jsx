import React, { useContext } from 'react'
import Navbar from './navbar'
import AlbumItems from './AlbumItems'
import SongItems from './songItems'
import { contextProvider } from '../context/constextApi'
function displayHome() {
  const {music,album}=useContext(contextProvider)
  return (
  <><Navbar/>
  <div className="mb-4">
    <h1>Featured charts</h1>
    <div className="flex overflow-auto">
      {album.map((items,index)=>(
    <AlbumItems id={items._id} image={items.image} name={items.name} desc={items.desc}/>
   ))}
    </div>
  </div>
  <div className="mb-4">
    <h1>Todays biggest hits</h1>
    <div className="flex overflow-auto">
      {music.map((items,index)=>(
    <SongItems id={items._id} image={items.image} name={items.name} desc={items.desc}/>
   ))}
    </div>
  </div>
  </>
  )
}

export default displayHome
