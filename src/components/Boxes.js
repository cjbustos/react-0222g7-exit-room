import React from "react";
import "../styles/Boxes.css";

function Boxes(props) {
  return (
    <div className="container-boxes">
      <div className="boxes">
        <p className="boxes-text">{props.texto}</p>
      </div>
    </div>
  );
}

export default Boxes;
