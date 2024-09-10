import { Link } from "react-router-dom";
import './index.scss';

function Card ({cardlink, cardcor, titulo, subtitulo}){
    return(
        <Link to = {cardlink} className="link">
            <div className="comp-card">
                <div className = {`retangulo ${cardcor}`}/>
                <h3 className="titulo">{titulo}</h3>
                <h4 className="subtitulo">{subtitulo}</h4>
            </div>
        </Link>
    )
}

export default Card