import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function useAnotherMemory() {
    const { imdbID } = useParams();
    const [movie, setMovie] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      async function searchMovie() {
        const { data } = await axios.get(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=ee7c6501`
        );
        setMovie([data]);
        setLoading(false);
      }
      searchMovie();
    }, []);

  return { movie, imdbID, loading };
}
