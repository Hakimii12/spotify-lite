import React from 'react'
import { data, useParams } from 'react-router-dom'
import { albumsData, assets } from '../assets/frontend-assets/assets'
import Navbar from './navbar'
import { songsData } from '../assets/frontend-assets/assets'
import { contextProvider } from '../context/constextApi'
import { useContext } from 'react'
function DisplayAlbum() {
  const {id}=useParams()
  const {music,album}=useContext(contextProvider)
  const albumdata= album[id]
  return (
    <><Navbar/>
    <div className='text-white m-5 flex gap-5'>
       <img className='w-48 rounded' src={albumdata.image} alt="" />
       <div className="flex flex-col">
        <p>Playlist</p>
        <h2 className='text-5xl font-bold mb-4 md:text-7xl'>{albumdata.name}</h2>
        <h4>{albumdata.desc}</h4>
        <img className='inline-block w-5' src={assets.spotify_logo} alt="" />
        <b>Spotify</b>
             • 1,323,154 likes
           <b>• 50 songs,</b>
           about 2 hr 30 min
       </div>
    </div>
    <div className="grid grid-cols-3 sm:grid-cols-4 mt:10 mb-4 pl-2 text-[#a7a7a7]">
        <p><b className="mr-4">#</b>Title</p>
        <p>Album</p>
        <p className="hidden lg:block">Date Added</p>
        <img className='m-auto w-4' src={assets.clock_icon} alt="" />
    </div>
    {music.map((song,index)=>(
      <div className="grid grid-cols-3 sm:grid-cols-4 gap-4 p-2 items-center">
        <p className="text-white">
          <b className='mr-4 text-[#a7a7a7]'>{index+1}</b>
           <img src={song.image} alt="" className="inline w-10 mr-5 " />
           {song.name}
          </p>
          <p className='text-[15px]'>{albumdata.name}</p>
          <p className='text-[15px] hidden lg:block'>5 days ago</p>
          <p className='text-[15px] text-center'>{song.duration}</p>
      </div>
    ))}
    </>
    
  )
}
export default DisplayAlbum
