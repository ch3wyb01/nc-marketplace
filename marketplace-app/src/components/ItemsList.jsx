import { useEffect, useState } from "react";
import { getItems } from "../utils/api";

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
          return <li key={item.item_id}>{item.item_name}</li>;
        })}
      </ul>
    </main>
  );
};

export default ItemsList;