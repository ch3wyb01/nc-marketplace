import { useEffect } from "react";
import { getItems } from "../utils/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const ItemsList = ({ items, setItems }) => {
  useEffect(() => {
    getItems().then((itemsFromApi) => {
      setItems(itemsFromApi);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <main>
      <h1>Items</h1>
      <button
            onClick={() => {
              navigate("/items/sell");
            }}
          >
            List an item for sale
          </button>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.item_id}>
              <p>{item.item_name}</p>
              <p>{`£${item.price}`}</p>
              <Link to={`/items/${item.item_id}`}>
                <img src={item.img_url} alt={`image of ${item.item_name}`} />
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default ItemsList;
