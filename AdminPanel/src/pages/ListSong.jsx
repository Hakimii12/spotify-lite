import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';
function ListSong() {
  const [song,setSong]=useState([])
  useEffect(()=>{
    axios
    .get('http://localhost:4000/api/music/list')
    .then((res)=>{
      setSong(res.data.data)
    })
  },[]);
  return (
    <>
        <div>
          <p>All Songs List</p>
          <br />
          <div>
            <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
              <b>Image</b>
              <b>Name</b>
              <b>Album</b>
              <b>Duration</b>
              <b>Action</b>
            </div>
            {song.map((song,index)=>{
      return( 
        <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
                 <img className='w-12' src={song.image} alt="" />
                 <p>{song.name}</p>
                 <p>{song.album}</p>
                 <p>{song.duration}</p>
                 <Link className='cursor-pointer' to={`/delete-song/${song._id}`}>X</Link>
        </div>
      )
    })}
          </div>
        </div>
     </>
   
  )
}

export default ListSong
