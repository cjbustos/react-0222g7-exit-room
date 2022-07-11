import React from 'react';
import '../hojas-de-estilo/Card.css';

function Card(props) {
  return (
    <div className="contenedor-cards">
      <div className="cards">
        <img
          className="imagen-card"
          src={require(`../imagenes/card-${props.imagen}.jpg`)}
          alt="Foto exit room"
        />
        <div className="contenedor-texto-card">
          <p className="nombre-card">
            <span className="nombre-card-color">{props.nombre} </span>
          </p>
          <p className="texto-card">"{props.texto}"</p>
        </div>
      </div>
    </div>
  );
}

export default Card;

