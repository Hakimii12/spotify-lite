import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { toast } from 'react-toastify'
function ListSong() {
  const [song,setSong]=useState([])
  useEffect(()=>{
    axios
    .get('http://localhost:4000/api/music/list')
    .then((res)=>{
      setSong(res.data.data)
      return(console.log(song))
    })
  },[]);
  return (
    <div>
      <button>delete</button>
    </div>
  )
}

export default ListSong
