import { useEffect } from "react";
import { getItems } from "../utils/api";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { MDBSpinner, MDBBtn } from "mdb-react-ui-kit";

const ItemsList = ({ items, setItems }) => {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    getItems().then((itemsFromApi) => {
      setItems(itemsFromApi);
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
          <ul>
            {items.map((item) => {
              return (
                <li key={item.item_id}>
                  <p>{item.item_name}</p>
                  <p>{`£${item.price}`}</p>
                  <Link to={`/items/${item.item_id}`}>
                    <img
                      src={item.img_url}
                      alt={item.item_name}
                    />
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      )}
    </main>
  );
};

export default ItemsList;
