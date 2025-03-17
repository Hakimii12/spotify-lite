import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";
export  const contextProvider=createContext()
function PlayerContextProvider(props){
    const [song, setSong]=useState(songsData[0])
    console.log(songsData,song)
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
            seekbar.current.style.width=Number((audioRef.current.currentTime/audioRef.current.duration)*100)+'%'
               setTime({
                 currentTime:{
                     seconds:Number(Math.floor(audioRef.current.currentTime%60)),
                     minutes:Number(Math.floor(audioRef.current.currentTime/60)),
                 },
                 totalTime:{
                     seconds:Number(Math.floor(audioRef.current.duration%60)),
                     minutes:Number(Math.floor(audioRef.current.duration/60)),
                 }
               })
       }
     },[audioRef])
     async function previews(){
        if(song.id>0){
            await setSong(songsData[song.id-1])
            await audioRef.current.play()
            await setisplaying(true);
        }
     }
     async function next(){
        if(song.id < songsData.length){
            await setSong(songsData[song.id+1])
            await audioRef.current.play()
            await setisplaying(true);
        }
     }
    const ContextValue={
        setisplaying,isplaying,
        audioRef,
        setSong,song,
        seekbg,
        seekbar,
        playsong,
        pausesong,
        time, setTime,
        previews,next
    }
    return(
        <contextProvider.Provider value={ContextValue}>
            {props.children}
        </contextProvider.Provider>
    )
}
export default PlayerContextProvider