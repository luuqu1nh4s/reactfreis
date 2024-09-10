import { useState } from 'react';
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CabecalhoExercicios from '../../components/cabecalhoExercicios';

function ExThree() {

  const[qtdPeq, setQtdPeq] = useState(0);
  const[qtdMed, setQtdMed] = useState(0);
  const[qtdGra, setQtdGra] = useState(0);
  const[resultado, setResultado] = useState();

  function acaisPequenos(){
    return Number(qtdPeq) * 13.50
  }

  function acaisMedios(){
    return Number(qtdMed) * 15.00
  }

  function acaisGrandes(){
    return Number(qtdGra) * 17.50
  }

  function calcularTotal(){
    let total = acaisPequenos() + acaisMedios() + acaisGrandes();
    setResultado (`O total à pagar é R$${total.toFixed(2)}`);
  }

  return (
    <div className="pagina-EX03">

        <Cabecalho/>

        <div className="title">
          <CabecalhoExercicios titulo = 'Exercício 03 - Venda de Açaí'/>
        </div>

        <div className="secao">
          <div className="enunciado">
            <p>Calcule o <b>total de uma venda de açaí</b> a partir das quantidades compradas para cada tamanho: <b>pequeno, médio e grande</b>, sabendo que o valor do açaí é R$13,50, R$15,00 e R$17,50 respectivamente</p>
          </div>

          <div className="execucao">
            <h4>Quantidade de Açaís Pequenos:</h4>
            <input type='text' value={qtdPeq} onChange={e=> setQtdPeq(e.target.value)}></input>
            <h4>Quantidade de Açaís Médios:</h4>
            <input type='text' value={qtdMed} onChange={e=> setQtdMed(e.target.value)}></input>        
            <h4>Quantidade de Açaís Grandes:</h4>
            <input type='text' value={qtdGra} onChange={e=> setQtdGra(e.target.value)}></input>        
            <button onClick={calcularTotal}>Executar</button>
          </div>
        </div>

        <h4 className='result'>{resultado}</h4>
    </div>
  );
}

export default ExThree;