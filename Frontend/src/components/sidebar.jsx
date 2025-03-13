import React from 'react'
import {assets} from '../assets/frontend-assets/assets'
function sidebar() {
  return (
    <div className='w-[25%] h-full p-2 flex-col gap text-white hidden lg:flex'>
        <div className=' bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div className=' flex items-center gap-3 pl-8 cursor-pointer'>
          <img src={assets.home_icon} className='w-6' alt="" />
          <h2 className='text-white font-bold'>
            Home
          </h2>
          </div>
          <div className=' flex items-center gap-3 pl-8 cursor-pointer'>
          <img src={assets.search_icon} className='w-6' alt="" />
          <h2 className='text-white font-bold'>
            Search
          </h2>
          </div>
        </div>
        <div className='bg-[#121212] h-[85%] rounded mt-2'>
            <div className="p-4 flex items-center justify-between">
                <div className='flex items-center gap-3'>
                    <img src={assets.stack_icon} className='w-8' alt="" />
                    <h2 className='font-semibold'>you library</h2>
                </div>
                <div className='flex items-center gap-3'>
                    <img src={assets.arrow_icon} className='w-5' alt="" />
                    <img src={assets.plus_icon} className='w-5' alt="" />
                </div>
            </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
             <h1>create your first playlist</h1>
             <p className='font-light'>it's easy we will help you</p>
             <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>create playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
             <h1>let's find podcast to follow</h1>
             <p className='font-light'>we'll keep you update on new epsodes</p>
             <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcats</button>
        </div>
        </div>
    </div>
  )
}

export default sidebar
