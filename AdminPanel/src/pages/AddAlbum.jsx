import React, { useEffect } from 'react'
import { useState } from 'react';
import { assets } from '../assets/admin-assets/assets';
import {ToastContainer,toast} from 'react-toastify'
import axios from 'axios';
import Loading from '../components/Loading'
function AddAlbum() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(false);
  const [album, setAlbum] = useState('none');
  const [file, setFile] = useState(false);
  const [loading,setLoading]=useState(false);
  const [albumData,setAlbumData]=useState([])
  async function albumdata(){
    await axios
    .get("http://localhost:4000/api/album/list")
    .then((res)=>{
      setAlbumData(res.data.data)
    })
  }
  useEffect(()=>{
    albumdata()
  },[]);
  function createProduct(event) {
    setLoading(true)
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('image', image);
    formData.append('album', album);
    formData.append('file', file);
    axios
      .post("http://localhost:4000/api/music/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        if(res.data.data.success){
           setLoading(false);
            toast.success('song added')
            setName("");
            setDesc("");
            setImage(false);
            setAlbum("none");
            setFile(false);
        }
        else{
          setLoading(false);
          toast.error('Failed to add song')
        };
      }).catch((err) => {
        setLoading(false);
        toast.error(`Failed to create product: ${err.response?.data?.message || err.message}`);
        console.log(err.message);
      })
  }
  return loading ? (
    <Loading/>
  ) :(
    <form onSubmit={createProduct} className='flex flex-col items-start gap-8 text-gray-600'>
      <div className="flex gap-8" >
        <div className="flex flex-col gap-2">
          <p>Upload Song</p>
        <input id='song' type="file" accept="audio/*" hidden
          onChange={(event) => setFile(event.target.files[0])}
        />
        <label htmlFor='song'>
          <img  src={file ?assets.upload_added:assets.upload_song} className='w-24 cursor-pointer' />
        </label>
        </div>
        <div className="flex flex-col gap-2">
          <p>Upload Image</p>
          <input type="file" id='image' hidden accept='image/*'
          onChange={(event) => setImage(event.target.files[0])}
        />
        <label htmlFor="image"><img src={image ? URL.createObjectURL(image):assets.upload_area} className='w-24 cursor-pointer' /></label>
        </div>
        </div>
        <div className="flex flex-col gap-2.5 ">
          <p>Song name</p>
          <input type="text"  value={name} placeholder='type here' className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]'
           required 
          onChange={(event) => setName(event.target.value)}
        />
        </div>
        <div className="flex flex-col gap-2.5 ">
          <p>Song Description</p>
          <input type="text"  value={desc} placeholder='type here' className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]'
           required 
           onChange={(event) => setDesc(event.target.value)}
        />
        </div>
        <div className="flex flex-col gap-2.5 ">
          <p>Album</p>
          <select onChange={(event) => setAlbum(event.target.value)} defaultValue={album} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]'>
            {albumData.map((data,index)=>{
              return(
                <option key={index} value={data.name}>{data.name}</option>  
              )
            })}
          </select>
        </div>
        <button type='submit' className=" text-base bg-black text-white py-2.5 px-14 cursor-pointer">
          ADD
        </button>
    </form>
  )
}
export default AddAlbum
