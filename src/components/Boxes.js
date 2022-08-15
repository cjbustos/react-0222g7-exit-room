import React from "react";
import "../styles/Boxes.css";

function Boxes({ text, children }) {
  return (
    <div className="box-container">
      <div className="name-box">
        <p>{text}</p>
      </div>
      <div className="icon-box">
        {children}
      </div>
    </div>
  );
}

export default Boxes;
