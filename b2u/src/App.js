import './App.css';
import { getVehicles } from './api';
import CardVehicle from './components/CardVehicle';
import Header from './components/Header';
import NewVehicle from './components/NewVehicle';
import SearchBar from './components/SearchBar';
import { useEffect, useState } from 'react';

function App() {

  const [vehicles, setVehicles] = useState([]);

  const fetchVehicles = async () => {
    try{
      const result = await getVehicles();
      setVehicles(result)
    }

    catch(error){
      console.log('fetchVehicles error: ', error);
    }
  }

  useEffect(() => {
    console.log('carregou');
    fetchVehicles();
  }, [])

  
  return (
    <div className='app'>

    <Header />

    <SearchBar />

    <NewVehicle />
    
    <div className='list'>
      {vehicles && vehicles.map((vei) => {
        return(
          <CardVehicle key={vei.ID} img={vei.Imagem} nome={vei.Nome} ano={vei.Ano} marca={vei.Marca} />
        )
      })}
    </div>
    
    </div>
  );
}

export default App;
