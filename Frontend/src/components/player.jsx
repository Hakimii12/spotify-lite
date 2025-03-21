import React, { useContext, useEffect, useState } from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { contextProvider } from '../context/constextApi'
function player() {
  const {
    isplaying,
    seekbg,
    seekbar,
    playsong,
    pausesong,
    song,
    music,
    previews,next,
    time,
    seekSong}=useContext(contextProvider)
    const [tempo,setTempo]=useState('')
    useEffect(()=>{
      music.map((val,i)=>{
        if(val.file==song)
           setTempo(val)
      })
      
    }) 
  return (
    <div className='h-[10%] bg-black flex justify-between items-center text-white px-4'>
      <div className='hidden lg:flex items-center gap-4'>
        <img className='w-12' src={tempo.image} alt="" />
        <div>
          <p className='text-white'>{tempo.name}</p>
          <p>{tempo ?tempo.desc.slice(0, 10)+"...":tempo}</p>
        </div>
      </div>
      <div className="flex flex-col gap-1 m-auto">
        <div className="flex justify-center gap-4">
          <img className='w-4 cursor-pointer' src={assets.shuffle_icon} alt="" />
          <img onClick={()=>previews()} className='w-4 cursor-pointer' src={assets.prev_icon} alt="" />
          {isplaying? <img onClick={()=>pausesong()} className='w-4 cursor-pointer' src={assets.pause_icon} alt="" />:
                     <img onClick={()=>playsong()} className='w-4 cursor-pointer' src={assets.play_icon} alt="" />
          }
          <img onClick={()=>next()} className='w-4 cursor-pointer' src={assets.next_icon} alt="" />
          <img className='w-4 cursor-pointer' src={assets.loop_icon} alt="" />
        </div>
        <div className="flex items-center gap-5">
          <p>{time.currentTime.minutes}:{time.currentTime.seconds}</p>
          <div ref={seekbg} onClick={(e)=>seekSong(e)} className="w-[60vw] max-w-[500px] bg-gray-300 cursor-pointer">
            <hr ref={seekbar} className="h-1 border-none bg-green-800 w-0" />
          </div>
          <p>{time.totalTime.minutes}:{time.totalTime.seconds}</p>
        </div>
      </div>
      <div className="hidden lg:flex items-center gap-2">
        <img src={assets.plays_icon} alt="" className="w-4" />
        <img src={assets.mic_icon} alt="" className="w-4" />
        <img src={assets.queue_icon} alt="" className="w-4" />
        <img src={assets.speaker_icon} alt="" className="w-4" />
        <div className="w-20 bg-slate-50 h-1 rounded">
        <hr className="h-1 border-none bg-green-800 w-2" />
        </div>
        <img src={assets.mini_player_icon} alt="" className="w-4" />
        <img src={assets.zoom_icon} alt="" className="w-4" />
      </div>
    </div>
  )
}
export default player
