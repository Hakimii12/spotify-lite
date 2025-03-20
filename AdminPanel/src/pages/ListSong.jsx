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
    <>{song.map((song,index)=>{
      return(
        <div key={song._id}>
          <p>{song.name}</p>
          <img src={song.image} alt="" />
          <p>{song.desc}</p>
          <Link to={`/delete-song/${song._id}`}>delete</Link>
        </div>
      )
    })}</>
   
  )
}

export default ListSong
