import axios from "axios";

const marketplaceApi = axios.create({
  baseURL: "https://nc-marketplace.herokuapp.com/api",
});

export const getCategories = () => {
  return marketplaceApi.get("/categories").then((res) => {
    return res.data.categories;
  });
};

export const getItems = () => {
  return marketplaceApi.get("/items").then((res) => {
    return res.data.items;
  });
};

export const getItem = (item_id) => {
  return marketplaceApi.get(`/items/${item_id}`).then((res) => {
    return res.data.item;
  });
};
