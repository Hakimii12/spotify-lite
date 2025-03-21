import { createContext, useEffect, useRef, useState } from "react";
import { songsData } from "../assets/frontend-assets/assets";
import axios from 'axios'
export  const contextProvider=createContext()
function PlayerContextProvider(props){
    const [song, setSong]=useState(songsData[0])
    const [music,setMusic]=useState([])
    const [album,setAlbum]=useState([])
    async function albumData(){
        await axios
        .get("http://localhost:4000/api/album/list")
        .then((res)=>{
          setAlbum(res.data.data)
        })
    }
    async function songData(){
        await axios
        .get("http://localhost:4000/api/music/list")
        .then((res)=>{
          setMusic(res.data.data)
        })
    }
    useEffect(()=>{
        songData()
        albumData()
    })
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
            await setSong(music[song.id-1])
            await audioRef.current.play()
            await setisplaying(true);
        }
     }
     async function next(){
        if(song.id < songsData.length-1){
            await setSong(music[song.id+1])
            await audioRef.current.play()
            await setisplaying(true);
        }
     }
     async function thisMusic(id){
        await setSong(music[id])
        await audioRef.current.play()
        await setisplaying(true);
     }
     async function seekSong(e) {
        const seekBgWidth = seekbg.current.clientWidth;
        const offsetX = e.nativeEvent.offsetX;
        const seekTime = (offsetX / seekBgWidth) * audioRef.current.duration;
        audioRef.current.currentTime = seekTime;
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
        previews,next,
        thisMusic,
        seekSong,
        music ,setMusic,
        album,setAlbum
    }
    return(
        <contextProvider.Provider value={ContextValue}>
            {props.children}
        </contextProvider.Provider>
    )
}
export default PlayerContextProvider