import { useEffect, useState } from 'react'
import { GetGifs } from '../helpers/GetGifs';

export const useFetchGif = (category) => {
  
    const [imagenes, setImagenes] = useState([]);
    const [loading, setLoading] = useState(true);
  
    const getImages = async ()=>{     
      const newImages = await GetGifs(category);
      setImagenes(newImages);
      setLoading(false);
    }  
     
    useEffect( () => {
         getImages()
    }, [])  
    
    return {
        imagenes,
        loading,
    };
}