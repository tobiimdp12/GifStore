import React, { useState } from "react";

export function AddCategoryForm({ addCategory }) {
  const [inputValue, setInputValue] = useState("");

  const handleOnSubmit = (e) => {
    e.preventDefault();
  
    if (inputValue.trim() < 1 || !/^[a-zA-Z\s]+$/.test(inputValue)) return;
    addCategory(inputValue.trim());
    setInputValue("");
  };
  return (
    <form onSubmit={handleOnSubmit} role="form">
      <input
        type={"text"}
        placeholder="Buscar un gif"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}
