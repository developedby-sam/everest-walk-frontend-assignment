import React from "react";

// components and styles
import "./checkout-item.styles.scss";

const ChechkoutItem = ({ cartItem: { name, price, quantity, image } }) => {
  const imageUrl = `https://electronic-ecommerce.herokuapp.com/${image}`;
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{quantity}</span>
      <span className="price">{price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

export default ChechkoutItem;
