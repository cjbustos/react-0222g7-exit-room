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
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Boxes from "./components/Boxes";
import Image from "./components/Image";
import CustomModal from "./components/CustomModal";
import Pictures from "./components/Pictures";
import ImageSlider from "./components/ImageSlider";
import pictures from "./components/Pictures";
import { createContext, useState } from "react";
import useAxios from "./hooks/useAxios";

export const ShopCartContext = createContext();

function App() {
  /* const navItems = [
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
    { id: 4, label: "Galería", subcategory: false, path: "products" },
    { id: 5, label: "Contacto", subcategory: false, path: "contact" },
  ]; */

  let [count, setCount] = useState(0);
  const counter = () => setCount((count = count + 1));

  const { data } = useAxios('http://localhost:8000/api')
  const { nav } = data

  return (
    <ShopCartContext.Provider value={{ count, counter }}>

      <div className="App">

        {/* NAVBAR */}

        <header>
          <a href="/">
            <Image path={logo} width={115} height={110} position={"left"} />
          </a>
          <Navbar opt={nav} />
        </header>

        {/* MAIN */}

        <main>
          <div className="container">
            <h1>¿PODES ESCAPAR EN 60 MINUTOS?</h1>
            <h2 className="h2-main">Desafiar tus cinco sentidos es clave</h2>
            <CustomModal label={"RESERVAR SALA"}>
              <h3>Texto dentro del Modal</h3>
            </CustomModal>
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
              Dentro de la sala el tiempo vuela, no te duermas! Todo puede ser
              una pista.
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
            <Card nombre="San Telmo" imagen="san-telmo" texto="Balcarce 1235" />
            <Card
              nombre="Vicente Lopez"
              imagen="vicente-lopez"
              texto="Av. del Libertador 2411 "
            />
            <Card nombre="Palermo" imagen="palermo" texto="Armenia 1782 " />
          </div>
        </section>

        {/* PRECIOS */}

        <section id="prices">
          <div className="container-prices">
            <h2 className="text-title">PRECIOS</h2>
            <p className="text-description">
              Los precios varian según la cantidad de jugadores
            </p>

            <div className="button-price">
              <button className="button-number">2 participantes $2000.-</button>
              <button className="button-number">3 participantes $1800.-</button>
              <button className="button-number">4 participantes $1600.-</button>
              <button className="button-number">5 participantes $1500.-</button>
              <button className="button-number">
                6+ participantes $1400.-
              </button>
            </div>
          </div>
        </section>

        {/* CARROUSEL */}

        <section id="carrousel">
          <ImageSlider pictures={pictures} />
        </section>

        {/* FORM */}

        <section id="contact">
          <div className="form-container">
            <div className="form-contact">
              <h2 className="text-title">CONTACTO</h2>
              <Image path={logo} width={115} height={110} />
            </div>
            <Form />
          </div>
        </section>

        {/* FOOTER */}

        <footer>Footer</footer>
      </div>
    </ShopCartContext.Provider>
  );

}

export default App;
