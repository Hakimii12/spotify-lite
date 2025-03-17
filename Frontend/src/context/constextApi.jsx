import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";
export  const contextProvider=createContext()
function PlayerContextProvider(props){
    const [song, setSong]=useState(songsData[0])
    const [time, setTime]=useState({
        currentTime:{
            seconds:0,
            minutes:0
        },
        totalTime:{
            seconds:0,
            minutes:0
        }
    })
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
    useEffect(()=>{
        audioRef.current.ontimeupdate=()=>{
               setTime({
                 currentTime:{
                     seconds:Math.floor(audioRef.current.currentTime%60),
                     minutes:Math.floor(audioRef.current.currentTime/60),
                 },
                 totalTime:{
                     seconds:Math.floor(audioRef.current.duration%60),
                     minutes:Math.floor(audioRef.current.duration/60),
                 }
               })
       }
     },[audioRef])
    const ContextValue={
        setisplaying,isplaying,
        audioRef,
        setSong,song,
        seekbg,
        seekbar,
        playsong,
        pausesong,
        time, setTime
    }
    return(
        <contextProvider.Provider value={ContextValue}>
            {props.children}
        </contextProvider.Provider>
    )
}
export default PlayerContextProvider