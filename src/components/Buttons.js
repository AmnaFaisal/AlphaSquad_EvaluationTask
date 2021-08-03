import React from "react";

function Buttons({ children, ...otherProps }) {
  return (
    <button style={{ width: "8rem", height: "3rem" }} {...otherProps}>
      {children}
    </button>
  );
}

export default Buttons;
