import './App.css';
import CardVehicle from './components/CardVehicle';
import Header from './components/Header';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className='app'>

    <Header />

    <SearchBar />
    <div className='list'>
    <CardVehicle />
    <CardVehicle />
    <CardVehicle />
    <CardVehicle />
    <CardVehicle />
    </div>
    
    </div>
  );
}

export default App;
