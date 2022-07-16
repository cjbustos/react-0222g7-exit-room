import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
// import logo from "./imagenes/logo";

function App() {
  return (
    <div className="App">
      <h2 className="texto-titulo">SALAS</h2>
      <h3 className="texto-bajo-titulo">60 MINUTOS PARA ESCAPAR</h3>
      <p className="texto-descripcion">
        Dentro de la sala el tiempo vuela, no te duermas! Todo puede ser una
        pista.
      </p>
      <div className="contenedor-card">
        <Card
          nombre="ALICIA´S ROOM"
          imagen="alice"
          texto="Caiste un mundo inimaginable, un mundo de fantasia. Podrás encontrar la salida?"
        />
        <Card
          nombre="SCHRöDINGER ROOM"
          imagen="schrödinger"
          texto="Famoso experimento mental. Podrás liberte antes de convertirte el gato en la bolsa?"
        />
        <Card
          nombre="STRANGER ROOM"
          imagen="stranger"
          texto="The upside down is here! Podrás escapar de la maldad que se avecina?"
        />
      </div>
      <h2 className="texto-titulo">SUCURSALES</h2>
      <h3 className="texto-bajo-titulo">Busca aquí tu sucursal mas cercana</h3>
      <div className="contenedor-card">
        <Card nombre="San Telmo" imagen="san-telmo" texto="DIRECCION" />
        <Card nombre="Vicente Lopez" imagen="vicente-lopez" texto="DIRECCION" />
        <Card nombre="Palermo" imagen="palermo" texto="DIRECCION" />
      </div>

      <div className="contenedor-form">
        <h2 className="texto-titulo">CONTACTO</h2>
        <Form />
        {/* <img className="logo" src={logo} alt="logo"/> */}
      </div>
    </div>
  );
}

export default App;
