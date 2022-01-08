import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardSubTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

const ItemCard = ({ id, name, price, image_url, description }) => {
  return (
    <MDBCard style={{ maxWidth: "22rem" }}>
      <Link to={`/items/${id}`}>
        <MDBCardImage
          onError={(event) =>
            (event.target.src =
              "https://designshack.net/wp-content/uploads/placeholder-image-368x246.png")
          }
          src={image_url}
          position="top"
          alt={name}
        />
      </Link>
      <MDBCardBody>
        <Link to={`/items/${id}`}>
          <MDBCardTitle>{name}</MDBCardTitle>
          <MDBCardSubTitle>£{price}</MDBCardSubTitle>
          <MDBCardText>{description}</MDBCardText>
        </Link>
        <MDBBtn href="/basket">Add to basket</MDBBtn>
        <MDBBtn href="#">Order now</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};

export default ItemCard;
