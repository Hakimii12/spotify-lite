import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
function DeleteSong() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    const [song,setSong]=useState([])
    useEffect(()=>{
        axios
        .get(`http://localhost:4000/api/music/delete/${id}`)
        .then((res)=>{
            setSong(res.data.data)
        })
    })
    async function deleteSong(){
            setLoading(true);
            try {
                const res = await axios.delete(`http://localhost:4000/api/music/delete/${id}`);
            } catch (error) {
                setLoading(false);
                toast.error('Error deleting song');
                console.error(error);
            } finally {
                toast.success('Song deleted successfully');
                    navigate('/list-song');
                setLoading(false);
            }
};

        return loading ? (<Loading />):  (<div>
            <p>are you going to delete ?</p>
            <p>{song.name}</p>
            <img src={song.image} className='w-24 cursor-pointer'/>
            <button onClick={navigate('/list-song')}> No</button>
            <button onClick={deleteSong()}> Yes</button>
        </div>) 
}

export default DeleteSong;