import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
function DeleteSong() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    async function deleteSong(){
            setLoading(true);
            try {
                const res = await axios.delete(`http://localhost:4000/api/music/delete/${id}`);
                console.log(res);
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
    useEffect(()=>{
        deleteSong()
    },[])

        return loading ? (<Loading />):  (<></>) 
}

export default DeleteSong;