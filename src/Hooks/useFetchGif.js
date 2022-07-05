import { useEffect, useState } from "react";
import { getGifs } from "../Helpers/GetGifs";

function useFetchGif(category) {
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);
  const response = async () => {
    setLoading(true);
    const newGifs = await getGifs(category);
    setGifs(newGifs);
    setLoading(false);
  };

  useEffect(() => {
    
    response();
  }, []);

  return { gifs, loading };
}

export default useFetchGif;
