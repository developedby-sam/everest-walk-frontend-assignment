import React from "react";
import "./custom-button.styles.scss";

const CustomButton = function ({ text, ...otherButtonProps }) {
  return (
    <button className="custom-button" {...otherButtonProps}>
      {text}
    </button>
  );
};

export default CustomButton;
