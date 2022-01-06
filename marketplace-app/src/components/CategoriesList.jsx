import { useEffect } from "react";
import { getCategories } from "../utils/api";

const CategoriesList = () => {
  useEffect(() => {
    getCategories().then((categoriesFromApi) => {
      console.log(categoriesFromApi);
    });
  }, []);

  return null;
};

export default CategoriesList;
