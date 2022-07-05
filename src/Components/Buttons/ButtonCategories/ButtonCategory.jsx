import React from "react";

function ButtonCategory({ text, handleUpdate }) {
  return (
    <div>
      <button className="button" onClick={handleUpdate} role="button">
        {text}
      </button>
    </div>
  );
}

export default ButtonCategory;
