import React from 'react';
import '../styles/Card.css';

function Card(props) {
  return (
    <div className="cards-container">
      <div className="cards">
        <img
          className="card-image"
          src={require(`../img/card-${props.imagen}.jpg`)}
          alt="Foto exit room"
        />
        <div className="card-text-container">
          <p className="card-name">
            <span className="card-color-name">{props.nombre} </span>
          </p>
          <p className="card-text">{props.texto}</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

