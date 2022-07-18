import React from "react";
import { AiOutlineCloudDownload } from "react-icons/ai";
import Swal from "sweetalert2";
import "./buttondownload.css";
function ButtonDownload({ gif }) {
  
  const handleClick = async () => {
    try {
      var xhr = new XMLHttpRequest();
      xhr.open("GET", gif.url, true);
      xhr.responseType = "blob";
      xhr.onload = function () {
        let urlCreator = window.URL || window.webkitURL;
        let imageUrl = urlCreator.createObjectURL(this.response);
        let tag = document.createElement("a");
        tag.href = imageUrl;
        tag.download = gif.title.charAt(0).toUpperCase() + gif.title.slice(1);
        document.body.appendChild(tag);
        tag.click();
        document.body.removeChild(tag);
      };
      xhr.send();
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: error.message,
      });
      alert(error.message);
    }
  };
  return (
    <a className="download" onClick={handleClick}>
      <AiOutlineCloudDownload />
    </a>
  );
}

export default ButtonDownload;
