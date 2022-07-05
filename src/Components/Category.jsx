import React from "react";
import ButtonCategory from "./Buttons/ButtonCategories/ButtonCategory";
import { GifGrid } from "./GifGrid";

export function Category({ category, categories, updateCategories }) {
  const handleUpdate = () => {
    updateCategories([]);
    const result = categories.filter((c) => c !== category);
    updateCategories(result);
  };

  return (
    <div>
      <h2>{category}</h2>
      <ButtonCategory text={"Delete Category"} handleUpdate={handleUpdate} />

      <GifGrid key={category} category={category} />
    </div>
  );
}
