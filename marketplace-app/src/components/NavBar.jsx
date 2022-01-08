import { useState } from "react";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarToggler,
  MDBNavbarLink,
  MDBNavbarItem,
  MDBIcon,
  MDBNavbarBrand,
} from "mdb-react-ui-kit";

const NavBar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <header>
      <MDBNavbar className="p-3" expand="md" light bgColor="white" fixed>
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">NC Marketplace</MDBNavbarBrand>
          <MDBNavbarToggler
            onClick={() => setIsExpanded(!isExpanded)}
            aria-controls="navbar"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon fas icon="bars" />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={isExpanded}>
            <MDBNavbarNav className="justify-content-end">
              <MDBNavbarItem active>
                <MDBNavbarLink aria-current="page" href="/">
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/categories">Categories</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/items">Items</MDBNavbarLink>
              </MDBNavbarItem>
              <MDBNavbarItem>
                <MDBNavbarLink href="/basket">Basket</MDBNavbarLink>
              </MDBNavbarItem>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </header>
  );
};

export default NavBar;
