import React from "react";
import ButtonCard from "./Buttons/ButtonCard/ButtonCard";
import Loader from "./Loader/Loader";
import Swal from "sweetalert2";
function GifItem({ gif }) {
  const handleModal = () => {
    Swal.fire({

      imageUrl: gif.url,
      imageWidth: 400,
      imageHeight: '80%',
  
      imageAlt: "Custom image",
      color: "#fff",
      background: "#000",
      backdrop: "#0000008a",
    });
  };

  const favoritesGif = JSON.parse(localStorage.getItem("favorites"));

  let isLiked = false;
  for (let g of favoritesGif) {
    if (g.id === gif.id) {
      //si esta en el local storage quiere decir que lo le dimos me gusta
      isLiked = true;
      break;
    }
  }

  return (
    <div>
      {!gif.url ? (
        <Loader />
      ) : (
        <div>
          <div className="card">
            <ButtonCard gif={gif} handleLiked={isLiked} />
            <img src={gif.url} alt="gif" onClick={handleModal} />
            <p>{gif.title}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default GifItem;
