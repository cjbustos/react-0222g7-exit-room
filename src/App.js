import "./styles/App.css";
// ICONS BOXES
import { BsSearch } from "react-icons/bs";
import { BsHandIndexThumb } from "react-icons/bs";
import { BsBookmarkCheck } from "react-icons/bs";
import { FaPeopleArrows } from "react-icons/fa";
import { GiExitDoor } from "react-icons/gi";
// ICONS PARTICIPANTES
import { RiHome4Line } from "react-icons/ri";
import { RiServiceLine } from "react-icons/ri";
import { MdWork } from "react-icons/md";
import { BsFillPeopleFill } from "react-icons/bs";
// ICONS REDES
import { BsFacebook } from "react-icons/bs";
import { FaInstagramSquare } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebookMessenger } from "react-icons/fa";
import { BsTelegram } from "react-icons/bs";
// COMPONENTS
import logo from "./img/logo.png";
import Card from "./components/Card";
import Boxes from "./components/Boxes";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Image from "./components/Image";
import Button from "./components/Button";

function App() {
  
  // NAV BAR CODE

  const navItems = [
    {
      id: 1,
      label: "Salas",
      subcategory: true,
      path: "episode",
      content: ["ALICIA", "SCHRöDINGER", "STRANGER ROOM"],
    },
    {
      id: 2,
      label: "Sucursales",
      subcategory: true,
      path: "cities",
      content: ["San Telmo", "Vicente Lopez", "Palermo"],
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
  };

  return (
    <div className="App">
      {/* NAVBAR */}

      <header>
        <a href="/">
          <Image path={logo} width={115} height={110} position={"left"} />
        </a>
        <Navbar data={navItems} />
      </header>

      {/* MAIN */}

      <main>
        <div className="container">
          <h1>¿PODES ESCAPAR EN 60 MINUTOS?</h1>
          <h2>Desafiar tus cinco sentidos es clave</h2>
          <Button style={style} onClick={() => alert("Click!")}>
            RESERVAR SALA
          </Button>
        </div>
      </main>

      {/* BOXES */}

      <div className="container-boxes">

        <div className="name-boxes">
          <p>Busca tu sucursal</p>
          <p>Elegi tu sala</p>
          <p>Reserva turno</p>
          <p>Arma tu equipo</p>
          <p>Podras escapar?</p>
        </div>

        <div className="icon-boxes">
          <BsSearch />
          <BsHandIndexThumb />
          <BsBookmarkCheck />
          <FaPeopleArrows />
          <GiExitDoor />
         
        </div>
      </div>

      {/* SALAS */}

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

      {/* PARTICIPANTES */}

      <div className="container-who-play">

        <h1>¿QUIENES PUEDEN PARTICIPAR?</h1>

        <div className="icons-participants">
          <RiHome4Line />
          <RiServiceLine />
          <MdWork />
          <BsFillPeopleFill />
        </div>

        <div className="name-participants">
          <p>Colegios</p>
          <p>Familia</p>
          <p>Empresas</p>
          <p>Amigos</p>
        </div>

      </div>

      {/* REDES */}

      <div className="container-social-media">

        <h3 className="text-undertitle">Seguinos en nuestras redes</h3>

        <div className="icons-redes">
          <BsFacebook />
          <FaInstagramSquare id="instagram" />
          <AiFillTwitterCircle />
          <FaFacebookMessenger />
          <BsTelegram />
        </div>

      </div>

      {/* SUCURSALES */}

      <section id="cities">

        <div className="container-shops">
          <h2 className="text-title">SUCURSALES</h2>
          <h3 className="text-undertitle">Busca tu sucursal mas cercana</h3>
        </div>

        <div className="cards-container">
          <Card nombre="San Telmo" imagen="san-telmo" texto="DIRECCION" />
          <Card
            nombre="Vicente Lopez"
            imagen="vicente-lopez"
            texto="DIRECCION"
          />
          <Card nombre="Palermo" imagen="palermo" texto="DIRECCION" />
        </div>

      </section>

      {/* PRECIOS */}

      <section id="prices">

        <div className="container-prices">
          <h2 className="text-title">PRECIOS</h2>
          <p className="text-description">
            Los precios varian según la cantidad de jugadores
          </p>
        </div>

      </section>

      {/* PRODUCTOS O CARROUSEL */}

      <section id="products"></section>

      {/* FORM */}

      <section id="contact">

        <div className="form-container">
          <h2 className="text-title">CONTACTO</h2>
          <Form />
        </div>
        
      </section>

      {/* FOOTER */}

      <footer>Footer</footer>
    </div>
  );
}

export default App;
