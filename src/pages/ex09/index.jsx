import { useState } from "react";
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CabecalhoExercicios from '../../components/cabecalhoExercicios';

function ExNine(){

    const[totalGramas, setTotalGramas] = useState(0);
    const[totalCompra, setTotalCompra] = useState();

    function calcularTotal(){
        let total = 0;

        if (Number(totalGramas) > 0 && Number(totalGramas) < 1000){
            total = Number(totalGramas) * 0.035;
            setTotalCompra (`O total a pagar é R$${total.toFixed(2)}`);
        }
        else if (Number(totalGramas) >= 1000){
            total = Number(totalGramas) * 0.030;
            setTotalCompra (`O total a pagar é R$${total.toFixed(2)}`);
        }
        else {
            setTotalCompra ("Peso Inválido");
        }
    }

    return(
        <div className='pagina-EX09'>

            <Cabecalho/>

            <div className="title">
                <CabecalhoExercicios titulo = 'Exercício 09 - Compra de Sorvete'/>
            </div>

            <div className="secao">
                <div className="enunciado">
                    <p><b>Calcule o total a se pagar</b> em uma compra em uma sorveteria a partir do total de gramas comprado. O preço de <b>100g é R$3,50</b>, mas se o total de gramas for <b>a partir de 1kg</b>, o preço das <b>100g diminui 50 centavos</b>. Se o total de gramas for menor ou igual a zero, será exibida a mensagem <b>"Peso inválido"</b>.</p>
                </div>
                <div className="execucao">
                    <h4>Total de Gramas de Sorvete:</h4>
                    <input type='text' value={totalGramas} onChange={e=>setTotalGramas(e.target.value)}></input>
                    <button onClick={calcularTotal}>Executar</button>
                </div>
            </div>
            <h4 className="result">{totalCompra}</h4>
        </div>
    )
}

export default ExNine;