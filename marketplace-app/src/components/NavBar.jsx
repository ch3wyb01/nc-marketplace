import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/items">Items</Link>
      <Link to="/basket">Basket</Link>
    </nav>
  );
};

export default NavBar;
