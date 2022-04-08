import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// components and stylings
import "./header.styles.scss";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = ({ hidden }) => {
  return (
    <div className="header">
      <Link to="/">
        <h1>EW | Electronic Shop</h1>
      </Link>
      <div className="options">
        <Link className="option" to="/">
          HOME
        </Link>
        <Link className="option" to="shop">
          SHOP
        </Link>
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

const mapStateToProps = ({ cart: { hidden } }) => ({
  hidden,
});

export default connect(mapStateToProps)(Header);
