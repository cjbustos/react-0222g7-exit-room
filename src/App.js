import './styles/App.css';
import logo from './img/logo.png'
import Navbar from './components/Navbar';
import Image from './components/Image';
//import Button from './components/Button'
//import CustomModal from './components/CustomModal'

function App() {

  const listOfItems = [
    { id: 1, label: 'Contacto', subcategory: false, path: 'contacto' },
    { id: 2, label: 'Productos', subcategory: false, path: 'productos' },
    { id: 3, label: 'Precios', subcategory: false, path: 'precios' },
    { id: 4, label: 'Sucursales', subcategory: true, path: 'cities', content: ['Buenos Aires', 'Rosario', 'Mendoza', 'Cordoba'] },
    { id: 5, label: 'Salas', subcategory: true, path: 'episode', content: ['Chernobyl', 'John Wick', 'Friday 13th'] }
  ]

  return (
    <div className='App'>
      <header>
        <Image path={logo} width={115} height={110} position={'left'} />
        <Navbar data={listOfItems} />
      </header>
      <main></main>
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
      <footer></footer>
    </div>
  );
}

export default App;
