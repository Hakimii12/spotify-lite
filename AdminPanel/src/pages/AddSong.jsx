import React from 'react'
import { useState } from 'react';
import { assets } from '../assets/admin-assets/assets';
import {ToastContainer,toast} from 'react-toastify'
import axios from 'axios';
import Loading from '../components/Loading'
function AddAlbum() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(false);
  const [loading,setLoading]=useState(false);
  const [albumData,setAlbumData]=useState([])
  function createProduct(event) {
    useEffect(()=>{
      axios
      .get("http://localhost:4000/api/album/list")
      .then((res)=>{
        console.log(res)
        setAlbumData(res.data.data)
      })
    },[]);
    setLoading(true)
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('image', image);
    axios
      .post("http://localhost:4000/api/album/add", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        console.log(albumData)
        console.log(res)
        console.log(res.data.message)
        if(res.data.message){
           setLoading(false);
            toast.success('song added')
            setName("");
            setDesc("");
            setImage(false);
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
        <div className="flex flex-col gap-4">
          <p>Upload Image</p>
          <input type="file" id='image' hidden accept='image/*'
          onChange={(event) => setImage(event.target.files[0])}
        />
        <label htmlFor="image"><img src={image ? URL.createObjectURL(image):assets.upload_area} className='w-24 cursor-pointer' /></label>
        </div>
        <div className="flex flex-col gap-2.5 ">
          <p>Album name</p>
          <input type="text"  value={name} placeholder='type here' className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]'
           required 
          onChange={(event) => setName(event.target.value)}
        />
        </div>
        <div className="flex flex-col gap-2.5 ">
          <p>Album Description</p>
          <input type="text"  value={desc} placeholder='type here' className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]'
           required 
           onChange={(event) => setDesc(event.target.value)}
        />
        </div>
        <button type='submit' className=" text-base bg-black text-white py-2.5 px-14 cursor-pointer">
          ADD
        </button>
    </form>
  )
}
export default AddAlbum
