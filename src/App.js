import './styles/App.css';
import logo from './img/logo.png'
import Navbar from './components/Navbar';
import Image from './components/Image';
import Button from './components/Button';

function App() {
  
  const listOfItems = [
    { id: 1, label: 'Contacto', subcategory: false, path: 'contacto' },
    { id: 2, label: 'Productos', subcategory: false, path: 'productos' },
    { id: 3, label: 'Precios', subcategory: false, path: 'precios' },
    { id: 4, label: 'Sucursales', subcategory: true, path: 'cities', content: ['CABA', 'Rosario', 'Mendoza', 'Cordoba'] },
    { id: 5, label: 'Salas', subcategory: true, path: 'episode', content: ['Chernobyl', 'Last stop', 'Fair game'] }
  ]

  const buttonStyle = {
    color: 'white',
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
    <div className='App'>
      <header>
        <Image path={logo} width={115} height={110} position={'left'} />
        <Navbar data={listOfItems} />
      </header>
      <main> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolores ex, soluta dolor repellat atque eius accusamus unde placeat ea, magnam iusto quam eligendi libero. In quia dolore vel at eum!</main>
      <h2 id='episode'>Salas</h2>
      <section>
        <div className='row'>
          <div className='div1'>
            <Button style={buttonStyle} label={'Button'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit veritatis, minima quisquam, iste natus quae, est fugiat culpa quasi reprehenderit expedita error quibusdam tempora doloribus aut autem aliquid perspiciatis.'} />
          </div>
          <div className='div1'>
            <Button style={buttonStyle} label={'Button'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit veritatis, minima quisquam, iste natus quae, est fugiat culpa quasi reprehenderit expedita error quibusdam tempora doloribus aut autem aliquid perspiciatis.'} />
          </div>
          <div className='div1'>
            <Button style={buttonStyle} label={'Button'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit veritatis, minima quisquam, iste natus quae, est fugiat culpa quasi reprehenderit expedita error quibusdam tempora doloribus aut autem aliquid perspiciatis.'} />
          </div>
          <div className='div1'>
            <Button style={buttonStyle} label={'Button'} text={'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit veritatis, minima quisquam, iste natus quae, est fugiat culpa quasi reprehenderit expedita error quibusdam tempora doloribus aut autem aliquid perspiciatis.'} />
          </div>
        </div>
      </section>
      <h2 id='cities'>Sucursales</h2>
      <section></section>
      <h2 id='precios'>Precios</h2>
      <section></section>
      <h2 id='productos'>Productos</h2>
      <section></section>
      <h2 id='contacto'>Contacto</h2>
      <section></section>
      <footer></footer>
    </div>
  );
}

export default App;
