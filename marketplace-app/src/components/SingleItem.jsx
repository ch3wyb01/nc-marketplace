import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getItem } from "../utils/api";

const SingleItem = () => {
  const { item_id } = useParams();
  const [item, setItem] = useState([]);

  useEffect(() => {
    getItem(item_id).then((itemFromApi) => {
      setItem(itemFromApi);
    });
  }, []);

  return (
    <main>
      <h1>{item.item_name}</h1>
      
    </main>
  );
};

export default SingleItem;
