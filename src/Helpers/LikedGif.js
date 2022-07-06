export default function LikedGif(gif) {
  const favoritesGif = JSON.parse(localStorage.getItem("favorites"));
  let isLiked=false;
  for (let g of favoritesGif) {
    if (g.id === gif.id) {
      //si esta en el local storage quiere decir que lo le dimos me gusta
      isLiked = true;
      break;
    }
  }
  return isLiked;
}
