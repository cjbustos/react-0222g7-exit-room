import React, { useState } from 'react';
import '../styles/Card.css';
import CustomModal from './CustomModal';

function Card(props) {

  const [showModal, setShowModal] = useState(props.showModal)

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
        {showModal &&
          <CustomModal sizeButton={props.sizeButton} label={'RESERVAR'}>
            {props.texto}
          </CustomModal>
        }
      </div>
    </div>
  );
}

export default Card;

