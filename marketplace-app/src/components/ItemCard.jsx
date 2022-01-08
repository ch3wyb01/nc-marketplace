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
    <MDBCard className="shadow my-4 mx-auto" style={{ maxWidth: "22rem" }}>
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
        <MDBCardTitle tag='h4'>{name}</MDBCardTitle>
        <MDBCardSubTitle tag='h6' className="text-muted">£{price}</MDBCardSubTitle>
        <MDBCardText className="py-2">{description}</MDBCardText>
        <div className="d-flex justify-content-around">
          <MDBBtn href="/basket">Add to basket</MDBBtn>
          <MDBBtn href="#">Order now</MDBBtn>
        </div>
      </MDBCardBody>
    </MDBCard>
  );
};

export default ItemCard;
