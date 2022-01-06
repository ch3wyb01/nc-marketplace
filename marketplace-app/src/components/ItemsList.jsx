import { useEffect, useState } from "react";
import { getItems } from "../utils/api";
import { Link } from "react-router-dom";

const ItemsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItems().then((itemsFromApi) => {
      setItems(itemsFromApi);
    });
  }, []);

  return (
    <main>
      <h1>Items</h1>
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

export default ItemsList;
