import Card from "./Card"
import { useEffect, useState } from "react";

const Home = () => {

    const [personajes, setPersonajes] = useState([]);
 
    useEffect( () => {
      fetch("https://rickandmortyapi.com/api/character")
      .then(res => res.json())
      .then(data => {
        setPersonajes(data.results)
      })
    }, [])
 
 
   return (
     <div>
 
       <div className='container-cards'>
 
       {personajes.map( curr => <Card
       key={curr.id} 
       id={curr.id}
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
 
 export default Home;