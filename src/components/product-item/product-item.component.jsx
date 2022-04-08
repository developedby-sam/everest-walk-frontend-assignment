import React from "react";
import "./product-item.styles.scss";

// components
import CustomButton from "../custom-button/custom-button.component";

const ProductItem = ({ name, price, image, stock, category }) => {
  const imageUrl = `https://electronic-ecommerce.herokuapp.com/${image}`;

  return (
    <div className="product-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      />
      <div className="product-footer">
        <span className="name">{name.toUpperCase()}</span>
        <div className="details">
          <span>Price: {`${price}`}</span>
          <span>In stock: {`${stock}`}</span>
          <span>
            Category:{" "}
            {`${category[1].charAt(0).toUpperCase() + category[1].slice(1)}`}
          </span>
        </div>
      </div>
      <CustomButton id="btn-addToCart">ADD TO CART</CustomButton>
    </div>
  );
};

export default ProductItem;
