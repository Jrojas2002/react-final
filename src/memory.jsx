import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function useMemory() {
  const name = localStorage.getItem("input");
  const [index, setIndex] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function searchData() {
      const { data } = await axios.get(
        `https://www.omdbapi.com/?i=tt3896198&apikey=ee7c6501&s=${name}`
      );
      setIndex(data.Search);
      setLoading(false);
    }
    searchData();
  }, []);

  return { index, loading };
}
