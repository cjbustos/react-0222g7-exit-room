import React from 'react';
import '../styles/Card.css';
import CustomModal from './CustomModal';

function Card({
  name,
  textoA,
  textoB,
  textoC,
  imagen,
  sizeButton,
  showModal,
  labelButton,
}) {
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
          <p className="card-textA">{textoA}</p>
          <p className="card-textB">{textoB}</p>
          <p className="card-textC">{textoC}</p>
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

