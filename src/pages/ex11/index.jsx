import { useState } from "react";
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CabecalhoExercicios from '../../components/cabecalhoExercicios';

function ExEleven(){

    const[numeroEscolhido, setNumeroEscolhido] = useState(0);
    const[tabuada, setTabuada] = useState([]);

    function criarTabuada(){
        let linhaTabuada = []
        for(let i = 1; i <= 10; i++){
            let resultado = Number(numeroEscolhido) * i;
            linhaTabuada.push(`${Number(numeroEscolhido)} x ${i} = ${resultado}`);
        }
        setTabuada (linhaTabuada);
    }

    return(
        <div className='pagina-EX11'>

            <Cabecalho/>

            <div className="title">
                <CabecalhoExercicios titulo = 'Exercício 11 - Tabuada'/>
            </div>

            <div className="secao">
                <div className="enunciado">
                    <p><b>Descubra a tabuada do número de sua escolha</b>, que aparecerá da seguinte maneira: A x B = X.</p>
                </div>
                <div className="execucao">
                    <h4>Número:</h4>
                    <input type='text' value={numeroEscolhido} onChange={e=>setNumeroEscolhido(e.target.value)}></input>
                    <button onClick={criarTabuada}>Executar</button>
                </div>
            </div>
            <h4 className="result">Tabuada do número {numeroEscolhido}:</h4>
            <h4 className="result">{tabuada.map((resultado) => <ul>{resultado}</ul>)}</h4>
        </div>
    )
}

export default ExEleven;