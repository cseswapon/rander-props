import React from "react";

const Box = ({ children }) => {
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "15px",
        borderRadius: "10px",
      }}
    >
      {children}
    </div>
  );
};

export default Box;
