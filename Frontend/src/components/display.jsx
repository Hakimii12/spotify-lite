import { useLocation } from 'react-router-dom'
import React, { useContext } from 'react'
import {Route,Routes} from 'react-router-dom'
import DisplayHome from './displayHome'
import DisplayAlbum from './DisplayAlbum'
import { contextProvider } from '../context/constextApi'
function display() {
  const location=useLocation()
  const {album} = useContext(contextProvider)
  const isAlbum=album.length && location.pathname.includes('album')
  const albumId=isAlbum ? location.pathname.split('/').pop():""
  return (
   <div className="w-[100%] m-2 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 ">
    <Routes>
      <Route path='/' element={<DisplayHome/>}/>
      <Route path='/album/:id' element={<DisplayAlbum albumItem={album.find((x)=>(x._id)==albumId)}/>}/>
    </Routes>
   </div>
  )
}
export default display
