import React from 'react';
import '../styles/Card.css';
import CustomModal from './CustomModal';

function Card({ name, texto, imagen, sizeButton, showModal, labelButton }) {

  return (
    <div className="cards-container">
      <div className="cards">
        <img
          className="card-image"
          src={require(`../img/card-${imagen}.jpg`)}
          alt="Foto exit room"
        />
        <div className="card-text-container">
          <p className="card-name">
            <span className="card-color-name">{name} </span>
          </p>
          <p className="card-text">{texto}</p>
        </div>
        {showModal && (
          <CustomModal
            name={name}
            sizeButton={sizeButton}
            label={labelButton}
          />
        )}
      </div>
    </div>
  );
}

export default Card;

