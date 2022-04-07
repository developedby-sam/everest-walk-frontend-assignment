import React, { useState, useEffect } from "react";
import "./product-preview.styles.scss";

import ProductItem from "../product-item/product-item.component";

const ProductPreview = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://electronic-ecommerce.herokuapp.com/api/v1/product")
      .then((response) => response.json())
      .then((response) => setProducts(response.data.product));
  }, []);

  return (
    <div className="product-preview">
      {products.map(({ id, ...otherProductProps }) => (
        <ProductItem key={id} {...otherProductProps} />
      ))}
    </div>
  );
};

export default ProductPreview;
