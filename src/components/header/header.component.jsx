import React from "react";
import { Link } from "react-router-dom";
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <h1>EW | Electronic Shop</h1>
      </Link>
      <div className="options">
        <Link className="option" to="shop">
          SHOP
        </Link>
        <Link className="option" to="contact">
          CONTACT
        </Link>
        <CartIcon />
      </div>
      <CartDropdown />
    </div>
  );
};

export default Header;
