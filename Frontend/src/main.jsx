import { StrictMode } from 'react'
import App from './App'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PlayerContextProvider from './context/constextApi'
PlayerContextProvider
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <PlayerContextProvider>
     <App />
  </PlayerContextProvider>
   
  </BrowserRouter>,
)
