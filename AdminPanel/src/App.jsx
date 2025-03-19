import axios from 'axios';
import React, { useState } from 'react';
import Album from './components/album';
import Song from './components/song';
import {Routes,Route} from 'react-router-dom'
function App() {


  return (
    <Routes>
      <Route path='/' element={<Album/>}/>
      <Route path='/song' element={<Song/>}/>
    </Routes>
  );
}
export default App;