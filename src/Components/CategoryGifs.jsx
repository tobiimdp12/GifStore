import { useEffect, useState } from "react";
import { AddCategoryForm, Category } from "./";
import ButtonCategory from "./Buttons/ButtonCategories/ButtonCategory";

function CategoryGifs() {
  const [categories, setCategories] = useState(["Dragon ball", "bakugan"]);

  const handleAddCategories = (value) => {
    setCategories([value, ...categories]);
  };
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("favorites")) == null) {
      const favoritesGif = [];
      localStorage.setItem("favorites", JSON.stringify(favoritesGif));

    }
  }, []);
  return (
    <div>
      {/* titulo*/}
      <h1>
        Welcome to <span>GIFSTORE</span>
      </h1>
      {/* input*/}
      <AddCategoryForm addCategory={handleAddCategories} />
      {/* gifs*/}

      <ButtonCategory
        text={"clear categories"}
        handleUpdate={() => setCategories([])}
      />

      {categories.length !== 0 ? (
        categories.map((category) => (
          <div>
            <Category
              category={category}
              categories={categories}
              updateCategories={setCategories}
            />
          </div>
        ))
      ) : (
        <h2>Search your first category :)</h2>
      )}
    </div>
  );
}

export default CategoryGifs;
