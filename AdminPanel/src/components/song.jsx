function Song(){
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [image, setImage] = useState(null);
  const [album, setAlbum] = useState('');
  const [file, setFile] = useState(null);
  const [data, setData] = useState("");
  function createProduct(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('desc', desc);
    formData.append('image', image);
    formData.append('album', album);
    formData.append('file', file);
    axios
      .post("https://spotify-lite-backend.onrender.com/api/music/add", formData, {
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
  return(<div className="flex items-center justify-center h-[87vh] bg-gray-100">
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
          onChange={(event) => setImage(event.target.files[0])}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input 
          type="text" 
          required
          value={album}
          placeholder='Enter album'
          onChange={(event) => setAlbum(event.target.value)}
          className="w-full p-2 mb-4 border border-gray-300 rounded"
        />
        <input 
          type="file" 
          required
          accept="audio/*"
          onChange={(event) => setFile(event.target.files[0])}
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
    </div>)

}
export default Song