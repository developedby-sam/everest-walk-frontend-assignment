import React from "react";
import ShoppingIcon from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";

const CartIcon = () => (
  <div className="cart-icon">
    <img className="shopping-icon" src={ShoppingIcon} />
    <span className="item-count">0</span>
  </div>
);

export default CartIcon;
