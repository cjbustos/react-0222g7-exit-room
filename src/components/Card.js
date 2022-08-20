import React, { useState } from 'react';
import '../styles/Card.css';
import CustomModal from './CustomModal';
import Image from './Image';
import Text from './Text';
import logo from "../img/logo.png";

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
        {showModal && (
          <CustomModal sizeButton={props.sizeButton} label={"RESERVAR"}>
            <Image path={logo} width={115} height={110} position={"center"} />
            <Text text={"Este es un texto 1"} />
            <Text text={"Este es un texto 2"} />
            <Text text={"Este es un texto 3"} />
          </CustomModal>
        )}
      </div>
    </div>
  );
}

export default Card;

