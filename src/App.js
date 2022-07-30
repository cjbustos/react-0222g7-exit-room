import "./App.css";
import Card from "./components/Card";
import Form from "./components/Form";
import "./Styles/App.css";
import logo from "./img/logo.png";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Button from "./components/Button";
//import CustomModal from './components/CustomModal'

function App() {
  const navItems = [
    {
      id: 1,
      label: "Salas",
      subcategory: true,
      path: "episode",
      content: ["Chernobyl", "John Wick", "Friday 13th"],
    },
    {
      id: 2,
      label: "Sucursales",
      subcategory: true,
      path: "cities",
      content: ["Buenos Aires", "Rosario", "Mendoza", "Cordoba"],
    },
    { id: 3, label: "Precios", subcategory: false, path: "precios" },
    { id: 4, label: "Productos", subcategory: false, path: "productos" },
    { id: 5, label: "Contacto", subcategory: false, path: "contacto" },
  ];

  return (
    <div className="App">
      <header>
        <a href="/">
          <Image path={logo} width={115} height={110} position={"left"} />
        </a>
        <Navbar data={navItems} />
      </header>
      <main>
        <div className="container"></div>
        <h1>¿PODES ESCAPAR EN 60 MINUTOS?</h1>
        <h2>Desafiar tus cinco sentidos es clave</h2>
        <Button
          style={{
            width: 180,
            height: 42,
            backgroundColor: "#0C9D9C",
            color: "#FFFFFF",
            borderRadius: 10,
            fontFamily: "Rationale",
            fontSize: 20,
          }}
          onClick={() => alert("Click!")}
        >
          RESERVAR SALA
        </Button>
      </main>
      <br />
      <div className="container-steps">
        <h1>CARDS</h1>
      </div>
      <br />
      <div className="container-who-play">
        <h1>¿QUIENES PUEDEN PARTICIPAR?</h1>
      </div>
      <br />
      <h2 id="episode">Salas</h2>
      <section>
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
      </section>
      <h2 id="cities">Sucursales</h2>
      <section>
        <h2 className="texto-titulo">SUCURSALES</h2>
        <h3 className="texto-bajo-titulo">
          Busca aquí tu sucursal mas cercana
        </h3>
        <div className="contenedor-card">
          <Card nombre="San Telmo" imagen="san-telmo" texto="DIRECCION" />
          <Card
            nombre="Vicente Lopez"
            imagen="vicente-lopez"
            texto="DIRECCION"
          />
          <Card nombre="Palermo" imagen="palermo" texto="DIRECCION" />
        </div>
      </section>
      <h2 id="precios">Precios</h2>
      <section></section>
      <h2 id="productos">Productos</h2>
      <section></section>
      <h2 id="contacto">Contacto</h2>
      <section>
        <div className="contenedor-form">
          <h2 className="texto-titulo">CONTACTO</h2>
          <Form />
        </div>
      </section>
      <br />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
