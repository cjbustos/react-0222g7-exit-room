import './styles/App.css';
import Navbar from './components/Navbar';
import Button from './components/Button';

function App() {

  const listOfItems = [
    { id: 1, name: 'Salas' },
    { id: 2, name: 'Sucursales' },
    { id: 3, name: 'Precios' },
    { id: 4, name: 'Productos' },
    { id: 5, name: 'Contacto' }
  ]

  const buttonStyle = {
    color: '#ffffff',
    background: '#0c9d9c',
    border: 2,
    borderRadius: 5,
    width: 100,
    height: 28,
    margin: 2,
    padding: 0,
    cursor: 'pointer',
  }

  return (
    <>
      <div className="App">
        <Navbar data={listOfItems} />
        <Button style={buttonStyle} label={'LEER MAS'} inNavbar={false} text={'Este texto se desplegará con la ejecución del botón'} />
      </div>
    </>
  );
}

export default App;
