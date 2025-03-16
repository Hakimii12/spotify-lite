import { useLocation } from 'react-router-dom'
import React from 'react'
import {Route,Routes} from 'react-router-dom'
import DisplayHome from './displayHome'
import DisplayAlbum from './DisplayAlbum'
function display() {
  const location=useLocation()
  console.log(location.pathname)
  return (
   <div className="w-[100%] m-2 pt-4 rounded bg-[#121212] text-white overflow-auto lg:w-[75%] lg:ml-0 ">
    <Routes>
      <Route path='/' element={<DisplayHome/>}/>
      <Route path='/album/:id' element={<DisplayAlbum/>}/>
    </Routes>
   </div>
  )
}
export default display
