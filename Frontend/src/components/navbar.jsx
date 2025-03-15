import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
function navbar() {
  return (
    <div className='w-full justify-between items-center font-semibold'>
      <div className="flex items-center gap-2">
        <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="" />
        <img className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="" />
      </div>
    
    </div>
  )
}

export default navbar
