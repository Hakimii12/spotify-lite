import { useState } from 'react'
import Sidebar from './components/sidebar'
import Player from './components/player'
import Display from './components/display'
import { useContext } from 'react'
import { contextProvider } from './context/constextApi'
function App() {
  const {music,audioRef}=useContext(contextProvider)
  return (
    <>
       <div className='bg-black h-screen'>
        <div className="h-[90%] flex">
          <Sidebar/>
          <Display/>
        </div>
        <div>
          <Player/>
          <audio ref={audioRef} preload="auto" src={music?.file}></audio>
        </div>
       </div>
    </>
  )
}

export default App
