import React, { Fragment, useState } from "react";
import "../styles/Form.css";

const Form = () => {

  const [datos, setDatos] = useState({
    nombre: "",
    email: "",
    number: "",
    mensaje: "",
  });

  const handleInputChange = (event) => {
    console.log(event.target.value)
    setDatos({
      ...datos,
      [event.target.name]: event.target.value
    });
  }

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido);
  };

  return (
    <Fragment>
      <form className="container-inputs" onSubmit={enviarDatos}>
        <div className="input-form">
          <input
            placeholder="Nombre y Apellido"
            className="name-form"
            type="text"
            name="nombre"
            onChange={handleInputChange} />

          <input
            placeholder="Email"
            className="name-form"
            type="email"
            name="email"
            onChange={handleInputChange} />

          <input
            placeholder="Telefono"
            className="name-form"
            type="number"
            name="number"
            onChange={handleInputChange} />
        {/* </div> */}
        {/* <div className="input-form"> */}
          <input
            placeholder="Dejanos tu mensaje"
            className="comments-form"
            type="text"
            name="mensaje"
            onChange={handleInputChange} />
        </div>
        <div className="button-contenedor">
          <button className="button-form" type="submit">
            ENVIAR
          </button>
        </div>
      </form>
    </Fragment>
  );
}

export default Form