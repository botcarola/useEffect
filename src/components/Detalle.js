import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const Detalle = () => {

    const params = useParams()
    const [personaje, setPersonaje] = useState([]);
   
    useEffect( () => {
      fetch(`https://rickandmortyapi.com/api/character/${params.id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
      })
    }, [])

    return (
        <>
        </>
    )
}

export default Detalle;