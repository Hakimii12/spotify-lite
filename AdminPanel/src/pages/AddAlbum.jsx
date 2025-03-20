import React from 'react'
import { useState } from 'react';
import { assets } from '../assets/admin-assets/assets';
function AddAlbum() {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(false);
  const [album, setAlbum] = useState('');
  const [file, setFile] = useState(false);
  const [data, setData] = useState("");
  const [loading,setLoading]=useState(false);
  const [albumData,setAlbumData]=useState([])
  function createProduct(event) {
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
        setData("Successfully created product");
        setName("");
        setDesc("");
        setImage(null);
        setAlbum("");
        setFile(null);
      }).catch((err) => {
        setData(`Failed to create product: ${err.response?.data?.message || err.message}`);
        console.log(err.message);
      });
  }
  return (
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
          <input type="text"  value={name} placeholder='type here' className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[max(40vw,250px)]'
           required 
           onChange={(event) => setDesc(event.target.value)}
        />
        </div>
        <div className="flex flex-col gap-2.5 ">
          <p>Album</p>
          <select onChange={(event) => setDesc(event.target.value)} defaultValue={album} className='bg-transparent outline-green-600 border-2 border-gray-400 p-2.5 w-[150px]' name="" id="">
            <option value="none">none</option>
          </select>
        </div>
        <button type='submit' className=" text-base bg-black text-white py-2.5 px-14 cursor-pointer">
          ADD
        </button>
        {data && <p className="mt-4 text-center text-red-500">{data}</p>}
    </form>
  )
}
export default AddAlbum
