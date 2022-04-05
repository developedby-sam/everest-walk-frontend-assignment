import React from "react";
import { Link } from "react-router-dom";

import "./header.styles.scss";

const Header = () => (
  <div className="header-container">
    <h1 className="header">EW | Electronic Shop</h1>
    <div className="group">
      <Link to="/">Home</Link>
      <Link to="/shop">Shop</Link>
      <Link to="/checkout">Cart</Link>
    </div>
  </div>
);

export default Header;
