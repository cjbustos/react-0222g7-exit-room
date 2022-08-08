import "./styles/App.css";
import logo from "./img/logo.png";
import { RiHome4Line } from 'react-icons/ri';
import Card from "./components/Card";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Button from "./components/Button";

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
    { id: 3, label: "Precios", subcategory: false, path: "prices" },
    { id: 4, label: "Productos", subcategory: false, path: "products" },
    { id: 5, label: "Contacto", subcategory: false, path: "contact" },
  ];

  const style = {
    width: 180,
    height: 42,
    backgroundColor: "#0C9D9C",
    color: "#FFFFFF",
    borderRadius: 10,
    fontFamily: "Rationale",
    fontSize: 20,
  }

  return (
    <div className="App">
      <header>
        <a href="/">
          <Image path={logo} width={115} height={110} position={"left"} />
        </a>
        <Navbar data={navItems} />
      </header>
      <main>
        <div className="container">
          <h1>¿PODES ESCAPAR EN 60 MINUTOS?</h1>
          <h2>Desafiar tus cinco sentidos es clave</h2>
          <Button style={style} onClick={() => alert("Click!")}>
            RESERVAR SALA
          </Button>
        </div>
      </main>
      <br />
      <div className="container-steps">
        <h1>CARDS</h1>
      </div>
      <br />
      <div className="container-who-play">
        <h1>¿QUIENES PUEDEN PARTICIPAR?</h1>
        <RiHome4Line style={{color: 'red'}} />
      </div>
      <br />
      <section id="episode">
        <div className="container-episodes">
          <h2 className="text-title">SALAS</h2>
          <h3 className="text-undertitle">60 MINUTOS PARA ESCAPAR</h3>
          <p className="text-description">
            Dentro de la sala el tiempo vuela, no te duermas! Todo puede ser una
            pista.
          </p>
        </div>
        <div className="cards-container">
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
      <br />
      <div className="container-social-media">
        <h3 className="text-undertitle">Seguinos en nuestras redes</h3>
      </div>
      <br />
      <section id="cities">
        <div className="container-shops">
          <h2 className="text-title">SUCURSALES</h2>
          <h3 className="text-undertitle">Busca tu sucursal mas cercana</h3>
        </div>
        <div className="cards-container">
          <Card nombre="San Telmo" imagen="san-telmo" texto="DIRECCION" />
          <Card nombre="Vicente Lopez" imagen="vicente-lopez" texto="DIRECCION" />
          <Card nombre="Palermo" imagen="palermo" texto="DIRECCION" />
        </div>
      </section>
      <br />
      <section id="prices">
        <div className="container-prices">
          <h2 className="text-title">PRECIOS</h2>
          <p className="text-description">
            Los precios varian según la cantidad de jugadores
          </p>
        </div>
      </section>
      <section id="products">
      </section>
      <section id="contact">
        <div className="form-container">
          <h2 className="text-title">CONTACTO</h2>
          <Form />
        </div>
      </section>
      <br />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
