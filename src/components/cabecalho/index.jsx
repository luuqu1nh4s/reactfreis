import { Link } from "react-router-dom";
import './index.scss';

function Cabecalho(){
    return (
        <header className='comp-cabecalho'>

            <div className="titulo">
                <img className='logo' src='/assets/images/logofrei.png'/>
                <h1>React FreiS</h1>
            </div>

            <div className="links">
                <Link to='/' className='link'>Início</Link>
                <Link to='/about' className='link'>Sobre</Link>
            </div>

        </header>
    )
}

export default Cabecalho