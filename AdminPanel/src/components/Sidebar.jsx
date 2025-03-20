import React from 'react'
import {assets} from '../assets/admin-assets/assets'
function Sidebar() {
  return (
    <div className='bg-[#003A10] min-h-screen pl-[4vw]'>
      <img className=' mt-5 w-[max(10vw,100px)] hidden sm:block' src={assets.logo} alt="" />
    </div>
  )
}

export default Sidebar
