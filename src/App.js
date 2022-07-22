import './styles/App.css';
import logo from './img/logo.png'
import Navbar from './components/Navbar';
import Image from './components/Image';

function App() {

  const navItems = [
    { id: 1, label: 'Salas', subcategory: true, path: 'episode', content: ['Chernobyl', 'John Wick', 'Friday 13th'] },
    { id: 2, label: 'Sucursales', subcategory: true, path: 'cities', content: ['Buenos Aires', 'Rosario', 'Mendoza', 'Cordoba'] },
    { id: 3, label: 'Precios', subcategory: false, path: 'precios' },
    { id: 4, label: 'Productos', subcategory: false, path: 'productos' },
    { id: 5, label: 'Contacto', subcategory: false, path: 'contacto' }
  ]

  return (
    <div className='App'>
      <header>
        <a href='/'><Image path={logo} width={115} height={110} position={'left'} /></a>
        <Navbar data={navItems} />
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
