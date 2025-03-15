import React, { use } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
function AlbumItems({image,name,desc,id}) {
    const navigate=useNavigate()
    console.log(id)
  return (
    <div onClick={()=>navigate(`/album/${id}`)} className=' min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26]'>
        <img className='rounded' src={image} alt="" />
        <p className='font-bold mt-2 mb-1'>{name}</p>
        <p className='text-slate-200 text-sm'>{desc}</p>
    </div>
  )
}

export default AlbumItems
