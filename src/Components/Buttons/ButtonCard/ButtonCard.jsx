import React, { useState } from "react";
import "./buttoncard.css";
import { AiTwotoneHeart } from "react-icons/ai";
import Swal from "sweetalert2";

function ButtonCard({ gif, handleLiked}) {
  console.log(gif,handleLiked);
  const [isLiked, setIsLiked] = useState(handleLiked);

  const SaveGif = () => {
    if (JSON.parse(localStorage.getItem("favorites")) == null) {//si es el primer elemento que añadimos

      const favoritesGif = [gif];
      localStorage.setItem("favorites", JSON.stringify(favoritesGif));

      Swal.fire({
        icon: "success",
        title: "Gif added successfully",
      });

      setIsLiked(true);

    } else {
      const favoritesGif = JSON.parse(localStorage.getItem("favorites"));
      let canAdd = true;

      for (let g of favoritesGif) {
        if (g.id === gif.id) {
          setIsLiked(false);
          canAdd = false;
          break;
        } else {
          canAdd = true;
        }
      }

      if (canAdd) {
        favoritesGif.push(gif);
        localStorage.setItem("favorites", JSON.stringify(favoritesGif));
        Swal.fire({
          icon: "success",
          title: "Gif added successfully",
        });
        setIsLiked(true);

      } else {
        
        const result = favoritesGif.filter((g) => g.id !== gif.id);
        localStorage.setItem("favorites", JSON.stringify(result));
        Swal.fire({
          icon: "info",
          title: "Gif deleted successfully",
        });
      }
    }
  };

  return (
    <div>
      <a onClick={SaveGif} role="button">
        <AiTwotoneHeart className={isLiked ? "heart active" : "heart"} />
      </a>
    </div>
  );
}

export default ButtonCard;
