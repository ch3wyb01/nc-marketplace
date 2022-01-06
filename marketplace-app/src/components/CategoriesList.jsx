import { useEffect, useState } from "react";
import { getCategories } from "../utils/api";

const CategoriesList = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      setCategories(categoriesFromApi);
    });
  }, []);

  return (
    <main>
      <h1>Categories</h1>
      <ul>
        {categories.map((category) => {
          return <li key={category.category_name}>{category.category_name}</li>;
        })}
      </ul>
    </main>
  );
};

export default CategoriesList;
