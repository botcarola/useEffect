import "../styles/_Card.scss";
import { Link } from "react-router-dom";

const Card = ({img, nombre, especie, estado, genero, id}) => {
    return (
        <Link to={`/vista-de-detalle/${id}`} className="card">
            <div className="container-img">
                <img src={img} alt={nombre}></img>
            </div>
            <div className="info-card">
                <h3>{nombre}</h3>    
                <span>Specie: {especie}</span>  
                <span>Status: {estado}</span>   
                <span>Gender: {genero}</span>       
            </div>
        </Link>
    )
}

export default Card;