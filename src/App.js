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
    border: 1,
    borderRadius: 5,
    width: 100,
    height: 28,
    margin: 2,
    padding: 0,
    textAlign: 'center',
    cursor: 'pointer',
  }

  return (
    <>
      <div className='App'>
        <Navbar data={listOfItems} />
        <Button style={buttonStyle} label={'LEER MAS'} inNavbar={false} text={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce dui urna, rutrum nec aliquam in, vulputate sed urna. Sed pretium dapibus sollicitudin. Integer scelerisque orci.'} />
      </div>
    </>
  );
}

export default App;
