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
// ICONS FOOTER
import { FiKey } from "react-icons/fi";
// COMPONENTS
import logo from "./img/logo.png";
import Card from "./components/Card";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
//import Boxes from "./components/Boxes";
import Image from "./components/Image";
import Footer from "./components/Footer";
import ImageSlider from "./components/ImageSlider";
import pictures from "./components/Pictures";
import useAxios from "./hooks/useAxios";
import Boxes from "./components/Boxes";
import ShoppingCartContextProvider from "./contexts/ShoppingCartContext";
import BookingContextProvider from "./contexts/BookingContext";
import Button from "./components/Button";
import CustomModal from "./components/CustomModal";

function App() {
  //API call
  const { data } = useAxios("http://localhost:8000/api");
  const { navbar } = data;

  return (
    <ShoppingCartContextProvider>
      <BookingContextProvider>
        <div className="App">
          {/* NAVBAR */}
          <header>
            <div className="logo1">
              <a href="/">
                <Image path={logo} width={115} height={110} position={"left"} />
              </a>
            </div>
            <div>
              <Navbar opt={navbar} />
            </div>
          </header>

          {/* MAIN */}
          <main>
            <div className="container">
              <h1>¿PODES ESCAPAR EN 60 MINUTOS?</h1>
              <h2 className="h2-main">Desafiar tus cinco sentidos es clave</h2>
              <div className="button-neon">
                <Button
                  className="button-regular"
                  onClick={() => (window.location.href = "#episode")}
                >
                  <span class="first">RESERVAR</span>
                  <span class="second"> SALA</span>
                </Button>
              </div>
            </div>
          </main>

          <div className="container-boxes">
            <Boxes text={"Busca tu sucursal"}>
              <BsSearch />
            </Boxes>
            <Boxes text={"Elegí tu sala"}>
              <BsHandIndexThumb />
            </Boxes>
            <Boxes text={"Reservá tu turno"}>
              <BsBookmarkCheck />
            </Boxes>
            <Boxes text={"Armá tu equipo"}>
              <FaPeopleArrows />
            </Boxes>
            <Boxes text={"¿Podrás escapar?"}>
              <GiExitDoor />
            </Boxes>
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
                id={1}
                active={true}
                name="ALICIA´S ROOM"
                imagen="alice"
                textoA="Caiste un mundo inimaginable, un mundo de fantasia. Podrás encontrar la salida?"
                textoB="Dificultad: ●●●○○"
                textoC="Jugadores: 2 a 6"
                showModal={true}
                labelButton={"RESERVAR"}
                sizeButton={"small"}
              />
              <Card
                id={2}
                active={true}
                name="SCHRöDINGER ROOM"
                imagen="schrödinger"
                textoA="Famoso experimento mental. Podrás liberte antes de convertirte el gato en la bolsa?"
                textoB="Dificultad: ●●●●●"
                textoC="Jugadores: 2 a 8"
                showModal={true}
                labelButton={"RESERVAR"}
                sizeButton={"small"}
              />
              <Card
                id={3}
                active={true}
                name="STRANGER ROOM"
                imagen="stranger"
                textoA="The upside down is here! Podrás escapar de la maldad que se avecina?"
                textoB="Dificultad: ●●●●○"
                textoC="Jugadores: 2 a 6"
                showModal={true}
                labelButton={"RESERVAR"}
                sizeButton={"small"}
              />
            </div>
          </section>

          {/* PARTICIPANTES */}
          <div className="container-who-play">
            <h2 className="text-title">¿Quienes pueden participar?</h2>
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
            <h2 className="text-title">Seguinos en nuestras redes</h2>
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
              <Card
                name="San Telmo"
                imagen="san-telmo"
                textoA="Balcarce 1235"
                showModal={false}
              />
              <Card
                name="Vicente Lopez"
                imagen="vicente-lopez"
                textoA="Av. del Libertador 2411 "
                showModal={false}
              />
              <Card
                name="Palermo"
                imagen="palermo"
                textoA="Armenia 1782"
                showModal={false}
              />
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
                <button className="button-number">2 participantes $2000</button>
                <button className="button-number">3 participantes $1800</button>
                <button className="button-number">4 participantes $1600</button>
                <button className="button-number">5 participantes $1500</button>
                <button className="button-number">
                  +6 participantes $1400
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
          <footer>
            <Footer />
            <h6 className="footer-text">
              EXIT ROOM - SALAS DE ESCAPE EN BUENOS AIRES / SEDES Palermo,
              Vicente Lopez y San Telmo
            </h6>

            <h6 className="footer-text">info@exitroom.com.ar</h6>
          </footer>
        </div>
      </BookingContextProvider>
    </ShoppingCartContextProvider>
  );
}

export default App;

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
