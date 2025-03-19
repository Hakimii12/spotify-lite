import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
function CreateProduct() {
  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [image, setImage] = useState('')
  const [album,setALbum]=useState('')
  const [file,setFile]=useState('')
  const [duration,setDuration]=useState('')
  const [data, setData] = useState("")
  const navigate =useNavigate()
  function createProduct(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('image', image);
    formData.append('album',album);
    formData.append('file',file);
    formData.append('duration',duration);

    axios
      .post("http://localhost:5000/api/products", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      })
      .then((res) => {
        setData("successfully created product");
        setName("");
        setDesc("");
        setImage("");
      }).catch((err) => {
        setData("failed to create product");
      });
    navigate("/");
  }

  return (
    <> <div className="flex items-center justify-center h-[87vh] bg-gray-100">
      <form onSubmit={createProduct} className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Product</h2>
        <input 
          type="text" 
          required
          value={name}
          placeholder='Enter product name'
          onChange={(event) => setName(event.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input 
          type="text" 
          required
          value={desc}
          placeholder='Enter product description'
          onChange={(event) => setDesc(event.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input 
          type="file" 
          required
          placeholder='Enter product picture'
          onChange={(event) => setImage(event.target.files[0])}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input 
          type="text" 
          required
          value={album}
          placeholder='Enter product name'
          onChange={(event) => setALbum(event.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input 
          type="text" 
          required
          value={file}
          placeholder='Enter product name'
          onChange={(event) => setFile(event.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input 
          type="number" 
          required
          value={duration}
          placeholder='Enter product price'
          onChange={(event) => setDuration(event.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <button 
          type='submit'
          className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Create
        </button>
        {data && <p className="mt-4 text-center text-red-500">{data}</p>}
      </form>
    </div>
    <BackIcon/>
    </>
   

  )
}

export default CreateProduct
