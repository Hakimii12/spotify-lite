import axios from 'axios';
import React, { useState } from 'react';
import Album from './components/album';
import Song from './components/song';
import {Routes,Route} from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import AddAlbum from './pages/AddAlbum'
import AddSong from './pages/AddSong'
import ListAlbum from './pages/ListAlbum'
import ListSong from './pages/ListSong'
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import DeleteAlbum from './pages/DeleteAlbum';
import DeleteSong from './pages/DeleteSong';
function App() {
  return (
    <div className="flex items-start min-h-screen">
     <ToastContainer/>
     <Sidebar/>
     <div className="flex-1 h-screen overflow-y-scroll bg-[#F3FFF7]">
      <Navbar/>
      <div className="pt-8 pl-5 sm:pt-12 sm:pl-12">
      <Routes>
      <Route path='/add-song' element={<AddAlbum/>}/>
      <Route path='/add-album' element={<AddSong/>}/>
      <Route path='/list-song' element={<ListSong/>}/>
      <Route path='/list-album' element={<ListAlbum/>}/>
      <Route path='/delete-album/:id' element={<DeleteAlbum/>}/>
      <Route path='/delete-song/:id' element={<DeleteSong/>}/>
    </Routes>
      </div>
     </div>
    </div>
  );
}
export default App;