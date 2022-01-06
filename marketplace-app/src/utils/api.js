import axios from "axios";

const marketplaceApi = axios.create({
  baseURL: "https://nc-marketplace.herokuapp.com/api",
});

export const getCategories = () => {
  return marketplaceApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};
