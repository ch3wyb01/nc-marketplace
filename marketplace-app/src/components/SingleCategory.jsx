import { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getItems } from "../utils/api";

const SingleCategory = ({ items, setItems }) => {
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
              <p>{item.item_name}</p>
              <p>{`£${item.price}`}</p>
              <Link to={`/items/${item.item_id}`}>
                <img src={item.img_url} alt={item.item_name} />
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};

export default SingleCategory;
