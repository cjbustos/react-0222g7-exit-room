import './styles/App.css';
import logo from './img/logo.png'
import Navbar from './components/Navbar';
import Image from './components/Image';
import Button from './components/Button'

function App() {

  const navItems = [
    { id: 1, label: 'Salas', subcategory: true, path: 'episode', content: ['Chernobyl', 'John Wick', 'Friday 13th'] },
    { id: 2, label: 'Sucursales', subcategory: true, path: 'cities', content: ['Buenos Aires', 'Rosario', 'Mendoza', 'Cordoba'] },
    { id: 3, label: 'Precios', subcategory: false, path: 'precios' },
    { id: 4, label: 'Productos', subcategory: false, path: 'productos' },
    { id: 5, label: 'Contacto', subcategory: false, path: 'contacto' }
  ]

  const btnStyle = {
    width: 180,
    height: 42,
    backgroundColor: '#0C9D9C',
    color: '#FFFFFF',
    borderRadius: 10,
    fontFamily: 'Rationale',
    fontSize: 20
  }

  return (
    <div className='App'>
      <header>
        <a href='/'><Image path={logo} width={115} height={110} position={'left'} /></a>
        <Navbar navContent={navItems} />
      </header>
      <main>
        <div className='container'>
          <Button style={btnStyle} onClick={() => { console.log('Click!') }}>RESERVAR SALA</Button>
        </div>
      </main>
    </div>
  );
}

export default App;
