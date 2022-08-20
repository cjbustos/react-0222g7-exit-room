import React from 'react';
import '../styles/Card.css';
import CustomModal from './CustomModal';
import Order from './Order';
import OrderList from './OrderList';

function Card({ id, active, nombre, texto, imagen, sizeButton, showModal, labelButton }) {

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
            <span className="card-color-name">{nombre} </span>
          </p>
          <p className="card-text">{texto}</p>
        </div>
        {showModal &&
          <CustomModal sizeButton={sizeButton} label={labelButton}>
            <Order name={nombre} />
          </CustomModal>
        }
      </div>
    </div>
  );
}

export default Card;

