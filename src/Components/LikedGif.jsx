import React from "react";
import GifItem from "./GifItem";

function LikedGif() {
  const likedGifs = JSON.parse(localStorage.getItem("favorites"));
  return (
    <div>
      {/* titulo*/}
      <h1>
        <span>YOUR FAVORITE GIFS</span>
      </h1>
      <div className="card-grid">
        {likedGifs.length !== 0 ? (
          likedGifs.map((gif) => <GifItem key={gif.id} gif={gif} />)
        ) : (
          <h2>Search your first favorite gif :)</h2>
        )}
      </div>
    </div>
  );
}

export default LikedGif;
