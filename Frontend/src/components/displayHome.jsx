import React from 'react'
import Navbar from './navbar'
import  {albumsData} from '../assets/frontend-assets/assets'
import AlbumItems from './AlbumItems'
function displayHome() {
  return (
  <><Navbar/>
  <div className="mb-4">
    <h1>Featured charts</h1>
    <div className="flex overflow-auto">
      {albumsData.map((items,index)=>(
    <AlbumItems key={index} image={items.image} name={items.name} desc={items.desc}/>
   ))}
    </div>
   
  </div>
  </>
  )
}

export default displayHome
