import './App.css';
import CardVehicle from './components/CardVehicle';
import Header from './components/Header';

function App() {
  return (
    <>

    <Header />
    <div className='list'>
    <CardVehicle />
    <CardVehicle />
    <CardVehicle />
    <CardVehicle />
    <CardVehicle />
    </div>
    </>
  );
}

export default App;
