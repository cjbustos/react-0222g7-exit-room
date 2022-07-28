import Button from './components/Button';
import './styles/App.css';

function App() {

  return (
    <div className='App'>
      <main>
        <div className='container'>
          <Button onClick={() => { console.log('Click!') }}>RESERVAR SALA</Button>
        </div>
      </main>
    </div>
  );
}

export default App;
