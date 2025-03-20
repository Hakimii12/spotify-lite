import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'
import Loading from '../components/Loading'
function DeleteSong() {
    const navigate=useNavigate()
    const {id}=useParams()
    const [loading,setLoading]=useState(false)
    try {
        useEffect(()=>{
            setLoading(true)
            axios.delete(`http://localhost:4000/api/music/delete/${id}`)
            .then((res)=>{
             if(res.data.data){
                setLoading(false)
                toast.success('song deleted')
                navigate('/list-song')
                return console.log(res)
             }
    })
        })
    } catch (error) {
        setLoading(false)
        toast.error('error deleting')
    }
    
  return loading ?(<Loading/>):(
       <></>
  )
}

export default DeleteSong
