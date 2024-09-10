import './index.scss';
import { Link } from 'react-router-dom/dist';

function CabecalhoExercicios(props){
    return(
        <header className='comp-cabecalhoEx'>
            <h1 className='titulo'> 
                <Link to={'/'}><img className='seta' src='/assets/images/setaVoltar.png'/></Link>
                {props.titulo}
            </h1>   
        </header>
    )
}

export default CabecalhoExercicios;