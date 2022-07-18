export const getGifs = async (category) => {
  const API_KEY = "RvBp1jQuLdi7sv3mk4KUBz9o6LhQzzSB";
  const URL = `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=10&offset=0&rating=g&lang=en`;
  const response = await fetch(URL);
  const { data } = await response.json();
  console.log(data);
  
  const gifs = data.map((gif) => ({
    id: gif.id,
    title: gif.title,
    url: gif.images.original.url,
  }));
  console.log(gifs);
  return gifs;
};
