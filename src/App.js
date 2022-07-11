import "./App.css";
import Card from './componentes/Card';

function App() {
  return (
    <div className="App">
      <h1>Exit Room</h1>

      <h2>SALAS</h2>
      <h3>60 MINUTOS PARA ESCAPAR</h3>
      <p>
        Dentro de la sala el tiempo vuela, no te duermas! Todo puede ser una
        pista.
      </p>
      <div className="contenedor-card">
        <Card
          nombre="ALICIA´S ROOM"
          imagen="alice"
          texto="Caiste un mundo inimaginable, un mundo de fantasia. Podrás encontrar la salida? "
        />
        <Card
          nombre="SCHRöDINGER ROOM"
          imagen="schrödinger"
          texto="Famoso experimento mental. Podrás liberte antes de convertirte el gato en la bolsa?? "
        />
        <Card
          nombre="STRANGER ROOM"
          imagen="stranger"
          texto="The upside down is here! Podrás escapar de la maldad que se avecina? ? "
        />
      </div>
    </div>
  );
}

export default App;
