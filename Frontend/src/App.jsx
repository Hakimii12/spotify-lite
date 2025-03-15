import { useState } from 'react'
import Sidebar from './components/sidebar'
import Player from './components/player'
import Display from './components/display'
function App() {
  return (
    <>
       <div className='bg-black h-screen'>
        <div className="h-[90%] flex">
          <Sidebar/>
          <Display/>
        </div>
        <div>
          <Player/>
        </div>
       </div>
    </>
  )
}

export default App
