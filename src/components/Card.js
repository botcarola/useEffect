import "../styles/_Card.scss";

const Card = ({img, nombre, especie, estado, genero}) => {
    return (
        <div className="card">
            <div className="container-img">
                <img src={img}></img>
            </div>
            <div className="info-card">
                <h3>{nombre}</h3>    
                <span>Specie: {especie}</span>  
                <span>Status: {estado}</span>   
                <span>Gender: {genero}</span>       
            </div>
        </div>
    )
}

export default Card;