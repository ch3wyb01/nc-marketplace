import { useEffect } from "react";
import { getItems } from "../utils/api";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MDBSpinner, MDBBtn } from "mdb-react-ui-kit";
import ItemCard from "./ItemCard";

const ItemsList = ({ items, setItems }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getItems().then((itemsFromApi) => {
      setItems(itemsFromApi.filter((item) => item.item_name !== "Test"));
      setIsLoading(false);
    });
  }, []);

  const navigate = useNavigate();

  return (
    <main>
      <h1>Items</h1>
      {isLoading ? (
        <MDBSpinner role="status">
          <span className="visually-hidden">Loading...</span>
        </MDBSpinner>
      ) : (
        <>
          <MDBBtn
            onClick={() => {
              navigate("/items/sell");
            }}
          >
            List an item for sale
          </MDBBtn>
          <div>
            {items.map((item) => (
              <ItemCard
                key={item.item_id}
                id={item.item_id}
                name={item.item_name}
                price={item.price}
                image_url={item.img_url}
                description={item.description}
              />
            ))}
          </div>
        </>
      )}
    </main>
  );
};

export default ItemsList;
