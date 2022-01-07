import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getItemsByCategory } from "../utils/api";

const SingleCategory = () => {
  const { category_name } = useParams();
  const [categoryItems, setCategoryItems] = useState([]);

  useEffect(() => {
    getItemsByCategory(category_name).then((itemsFromApi) => {
      setCategoryItems(itemsFromApi);
    });
  }, []);

  return (
    <main>
      <h1>{category_name}</h1>
      <ul>
        {categoryItems.map((item) => {
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
