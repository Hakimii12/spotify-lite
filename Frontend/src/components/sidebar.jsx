import React from 'react'
import {assets} from '../assets/assets'
function sidebar() {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap text-white hidden lg:flex'>
        <div className=' bg-[#121212] h-[15%] rounded flex flex-col justify-around'></div>
          <div className=' flex items-center gap-3 pl-8 cursor-pointer'>
            <img src="" alt="" />
          </div>
    </div>
  )
}

export default sidebar
