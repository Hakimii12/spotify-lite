import { createContext, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";
export  const contextProvider=createContext()
function PlayerContextProvider(props){
    const [song, setSong]=useState(songsData[0])
    console.log(song)
    const [isplaying,setisplaying]=useState(false)
    const audioRef=useRef()
    const seekbg=useRef()
    const seekbar=useRef()
    function playsong(){
        audioRef.current.play()
        setisplaying(true)
    }
    function pausesong(){
        audioRef.current.pause()
        setisplaying(false)
    }
    const ContextValue={
        setisplaying,isplaying,
        audioRef,
        setSong,song,
        seekbg,
        seekbar,
        playsong,
        pausesong
    }
    return(
        <contextProvider.Provider value={ContextValue}>
            {props.children}
        </contextProvider.Provider>
    )
}
export default PlayerContextProvider