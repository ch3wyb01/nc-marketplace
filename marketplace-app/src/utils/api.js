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

export const getItemsByCategory = (category) => {
  return marketplaceApi.get(`/items?category_name=${category}`).then((res) => {
    return res.data.items;
  });
};

export const getItem = (item_id) => {
  return marketplaceApi.get(`/items/${item_id}`).then((res) => {
    return res.data.item;
  });
};

export const postItem = (
  item_name,
  img_url,
  price,
  description,
  category_name
) => {
  return marketplaceApi
    .post("/items", { item_name, img_url, price, description, category_name })
    .then((res) => {
      return res.data.item;
    });
};
