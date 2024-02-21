import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-default my-custom-navbar">
      <Link to="/">HOME</Link>
<Link to="/CreateSellerComponent">Create Seller</Link>
<Link to="/ListSellerComponent">List Seller</Link>

      </nav>
    </div>
  );
};

export default Navbar;
