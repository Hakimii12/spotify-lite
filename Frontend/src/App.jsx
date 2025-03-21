import { useState } from 'react'
import Sidebar from './components/sidebar'
import Player from './components/player'
import Display from './components/display'
import { useContext } from 'react'
import { contextProvider } from './context/constextApi'
function App() {
  const {music,song,audioRef}=useContext(contextProvider)
  return (
    <>
       <div className='bg-black h-screen'>
        {music.length !==0
        ?<>
        <div className="h-[90%] flex">
        <Sidebar/>
        <Display/>
      </div>
        <Player/>
        </>:null}
          <audio ref={audioRef} preload="auto" src={song}></audio>
       </div>
    </>
  )
}
export default App
