import './styles/App.css';
import logo from './img/logo.png'
import Navbar from './components/Navbar';
import Image from './components/Image';
import Button from './components/Button'
import Ad from './components/Ad';
//import CustomModal from './components/CustomModal'

function App() {

  const navItems = [
    { id: 1, label: 'Salas', subcategory: true, path: 'episode', content: ['Chernobyl', 'John Wick', 'Friday 13th'] },
    { id: 2, label: 'Sucursales', subcategory: true, path: 'cities', content: ['Buenos Aires', 'Rosario', 'Mendoza', 'Cordoba'] },
    { id: 3, label: 'Precios', subcategory: false, path: 'precios' },
    { id: 4, label: 'Productos', subcategory: false, path: 'productos' },
    { id: 5, label: 'Contacto', subcategory: false, path: 'contacto' }
  ]

  /* const btnStyle = {
    width: 180,
    height: 42,
    backgroundColor: '#0C9D9C',
    color: '#FFFFFF',
    borderRadius: 10,
    fontFamily: 'Rationale',
    fontSize: 20
  } */

  return (
    <div className='App'>
      <header>
        <Ad />
        <a href='/'><Image path={logo} width={115} height={110} position={'left'} /></a>
        <Navbar navContent={navItems} />
      </header>
      <main>
        <div className='container'>
          <h1>¿PODES ESCAPAR EN 60 MINUTOS?</h1>
          <h2>Desafiar tus cinco sentidos es clave</h2>
          <Button onClick={(e) => { console.log(e) }}>LEER MAS</Button>
        </div>
      </main>
      <br />
      <div className='container-steps'>
        <h1>CARDS</h1>
      </div>
      <br />
      <div className='container-who-play'>
        <h1>¿QUIENES PUEDEN PARTICIPAR?</h1>
      </div>
      <br />
      <h2 id='episode'>Salas</h2>
      <section>
      </section>
      <h2 id='cities'>Sucursales</h2>
      <section></section>
      <h2 id='precios'>Precios</h2>
      <section></section>
      <h2 id='productos'>Productos</h2>
      <section>
      </section>
      <h2 id='contacto'>Contacto</h2>
      <section></section>
      <br />
      <footer>Footer</footer>
    </div>
  );
}

export default App;
