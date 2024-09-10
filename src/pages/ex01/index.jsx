import { useState } from 'react';
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CabecalhoExercicios from '../../components/cabecalhoExercicios';

function ExOne() {

  const[valorPedido, setValorPedido] = useState(0);
  const[valorCupom, setValorCupom] = useState(0);
  const[resultado, setResultado] = useState();

  function calcularTotal(){
    let novoValor = Number(valorPedido) - Number(valorCupom);
    setResultado (`Compra finalizada! O valor final é R$${novoValor.toFixed(2)}`);
  }

  return (
    <div className="pagina-EX01">

      <Cabecalho/>

      <div className="title">
        <CabecalhoExercicios titulo = 'Exercício 01 - Compra com Desconto'/>
      </div>

      <div className="secao">
        <div className="enunciado">
          <p><b>Calcule o valor final de uma compra</b> a partir do valor da compra e do cupom de desconto. <b>O cupom diz quantos reais</b> terá de desconto.</p>
        </div>

        <div className="execucao">
          <h4>Informe o valor do pedido:</h4>
          <input type='text' value={valorPedido} onChange={e=> setValorPedido(e.target.value)}></input>
          <h4>Informe o valor do cupom:</h4>
          <input type='text' value={valorCupom} onChange={e=> setValorCupom(e.target.value)}></input>
          <button onClick={calcularTotal}>Executar</button>
        </div>
        
      </div>
      
      <h4 className='result'>{resultado}</h4>
      
    </div>
  );
}

export default ExOne;