import React from "react";
import "./custom-button.styles.scss";

const CustomButton = function ({ children, inverted, ...otherButtonProps }) {
  return (
    <button
      className={`${inverted ? "inverted" : ""} custom-button`}
      {...otherButtonProps}
    >
      {children}
    </button>
  );
};

export default CustomButton;
