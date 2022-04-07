import React from "react";
import "./product-item.styles.scss";

const ProductItem = ({ name, price, image, stock, category }) => {
  const imageUrl = `https://electronic-ecommerce.herokuapp.com/${image}`;
  console.log(imageUrl);
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
    </div>
  );
};

export default ProductItem;
