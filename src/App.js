import './App.scss';
import Card from "./components/Card"
import {useEffect, useState} from "react";

const App = () => {

   const [personajes, setPersonajes] = useState([]);

   useEffect( () => {
     fetch("https://rickandmortyapi.com/api/character")
     .then(res => res.json())
     .then(data => {
       console.log(data)
       setPersonajes(data.results)
     })
   }, [])


  return (
    <div>

      <div className='container-cards'>

      {personajes.map( curr => <Card 
      img={curr.image}
      nombre={curr.name} 
      especie={curr.species} 
      estado={curr.status} 
      genero={curr.gender} 
      />)}
      </div>
          
      
    </div>
  )
}

export default App;
