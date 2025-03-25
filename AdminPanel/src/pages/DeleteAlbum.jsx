import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import Loading from '../components/Loading';
function DeleteAlbum() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [loading, setLoading] = useState(false);
    async function deleteAlbum(){
            setLoading(true);
            try {
                const res = await axios.delete(`https://spotify-lite-backend.onrender.com/album/delete/${id}`);
            } catch (error) {
                setLoading(false);
                toast.error('Error Deleting Album');
                console.error(error);
            } finally {
                toast.success('Album deleted successfully');
                    navigate('/list-album');
                setLoading(false);
            }
};
useEffect(()=>{
  deleteAlbum()
},[id]);
        return loading ? (<Loading />):  (<></>) 
}
export default DeleteAlbum;
