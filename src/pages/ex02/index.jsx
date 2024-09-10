import { useState } from 'react';
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CabecalhoExercicios from '../../components/cabecalhoExercicios';

function ExTwo() {

  const[valorKG, setValorKG] = useState(0);
  const[resultado, setResultado] = useState();

  function converter(){
    let conv = Number(valorKG) * 1000;
    setResultado (`O valor em gramas é ${conv}g`);
  }

  return (
    <div className="pagina-EX02">
      
        <Cabecalho/>

        <div className="title">
          <CabecalhoExercicios titulo = 'Exercício 02 - Converter KG/Gramas'/>
        </div>

        <div className="secao">

          <div className="enunciado">
            <p>Faça uma conversão de <b>quilos para gramas</b>.</p>
          </div>

          <div className="execucao">
            <h4>Valor em quilos:</h4>
            <input type='text' value={valorKG} onChange={e=> setValorKG(e.target.value)}></input>
            <button onClick={converter}>Executar</button>
          </div>
        </div>
        
        <h4 className='result'>{resultado}</h4>
    </div>
  );
}

export default ExTwo;