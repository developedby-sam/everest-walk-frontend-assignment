import React, { useState, useEffect } from "react";
import "./shoppage.styles.scss";

import ProductPreview from "../../components/product-preview/product-preview.component";

const Shoppage = () => {
  return (
    <div className="shop-page">
      <ProductPreview />
    </div>
  );
};

export default Shoppage;
