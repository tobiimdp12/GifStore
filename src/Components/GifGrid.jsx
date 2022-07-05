import useFetchGif from "../Hooks/useFetchGif";
import  GifItem  from "./GifItem";
import Loader from "./Loader/Loader";

export const GifGrid = ({ category }) => {
  const { gifs, loading } = useFetchGif(category);

  return (
    <>
      <div className="card-grid">
        {loading ? (
         <Loader/>
        ) : (
          gifs.map((gif) => <GifItem key={gif.id} gif={gif} />)
        )}
      </div>
    </>
  );
};
