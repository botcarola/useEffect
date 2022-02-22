import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Detalle = () => {

    const params = useParams()
    const [personaje, setPersonaje] = useState([]);
   
    useEffect( () => {
      fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then(res => res.json())
      .then(data => {
        setPersonaje(data)
      })
    }, [params.id]) 

    return (
        <>
            <h2>{personaje.name}</h2>
            <h3>{personaje.status}</h3>
            <h3>{personaje.gender}</h3>
        </>
    )
}

export default Detalle;