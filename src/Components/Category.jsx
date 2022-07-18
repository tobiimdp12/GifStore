import React from "react";
import ButtonCategory from "./Buttons/ButtonCategories/ButtonCategory";
import { GifGrid } from "./GifGrid";
import PropTypes from "prop-types";

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

Category.propTypes = {
  category: PropTypes.string.isRequired,
  categories: PropTypes.array.isRequired,
  updateCategories: PropTypes.func.isRequired,
};
