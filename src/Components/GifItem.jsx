import React from "react";
import ButtonCard from "./Buttons/ButtonCard/ButtonCard";
import Loader from "./Loader/Loader";
import ButtonDownload from "./Buttons/ButtonDownload/ButtonDownload";
import LikedGif from "../Helpers/LikedGif";
import Swal from "sweetalert2";

function GifItem({ gif }) {

  const handleModal = () => {
    Swal.fire({
      imageUrl: gif.url,
      imageWidth: 400,
      imageHeight: "80%",

      imageAlt: "Custom image",
      color: "#fff",
      background: "#000",
      backdrop: "#0000008a",
    });
  };

  let isLiked = LikedGif(gif);

  return (
    <div>
      {!gif.url ? (
        <Loader />
      ) : (
        <div>
          <div className="card">
            <ButtonDownload gif={gif} />
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
