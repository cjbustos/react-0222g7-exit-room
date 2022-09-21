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
    console.log(event.target.value);
    setDatos({
      ...datos,
      [event.target.name]: event.target.value,
    });
  };

  const enviarDatos = (event) => {
    event.preventDefault();
    console.log("enviando datos..." + datos.nombre + " " + datos.apellido);
  };

  return (
    <>
      <form className="container-inputs" onSubmit={enviarDatos}>
        <div className="input-form">
          <input
            placeholder="Nombre y Apellido"
            className="name-form"
            type="text"
            name="nombre"
            onChange={handleInputChange}
          />

          <input
            placeholder="Email"
            className="name-form"
            type="email"
            name="email"
            onChange={handleInputChange}
          />

          <input
            placeholder="Telefono"
            className="name-form"
            type="number"
            name="number"
            onChange={handleInputChange}
          />

          <input
            placeholder="Dejanos tu mensaje"
            className="comments-form"
            type="text"
            name="mensaje"
            onChange={handleInputChange}
          />
          <div className="button-neon">
            <button className="button-regular" type="submit">
              <span class="first">ENV</span>
              <span class="second">IAR</span>
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Form;
