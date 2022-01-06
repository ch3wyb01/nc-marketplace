import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getItems } from "../utils/api";

const SingleCategory = ({items, setItems}) => {
  const { category_name } = useParams();

  useEffect(() => {
    getItems().then((itemsFromApi) => {
      const categoryItems = itemsFromApi.filter((item) => {
        return item.category_name === category_name;
    });
    setItems(categoryItems);
    });
  }, []);

  return (
    <main>
      <h1>{category_name}</h1>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.item_id}>
              <Link to={`/items/${item.item_id}`}>
                <img src={item.img_url} alt={`image of ${item.item_name}`} />
              </Link>
              <p>{item.item_name}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default SingleCategory;
