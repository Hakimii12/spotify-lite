import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom';
function ListAlbum() {
  const [album,setAlbum]=useState([])
  useEffect(()=>{
    axios
    .get("http://localhost:4000/api/album/add")
    .then((res)=>{
      console.log(res)
      setAlbum(res.data.data)
    })
  },[]);
  return (
    <>
        <div>
          <p>All Album List</p>
          <br />
          <div>
            <div className="sm:grid hidden grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5 bg-gray-100">
              <b>Image</b>
              <b>Name</b>
              <b>Action</b>
            </div>
            {album.map((album,index)=>{
      return( 
        <div key={index} className='grid grid-cols-[1fr_1fr_1fr] sm:grid-cols-[0.5fr_1fr_2fr_1fr_0.5fr] items-center gap-2.5 p-3 border border-gray-300 text-sm mr-5'>
                 <img className='w-12' src={album.image} alt="" />
                 <p>{album.name}</p>
                 <Link className='cursor-pointer' to={`/delete-album/${album._id}`}>X</Link>
        </div>
      )
    })}
          </div>
        </div>
     </>
   
  )
}
export default ListAlbum

