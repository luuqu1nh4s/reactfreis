import { useState } from "react";
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CabecalhoExercicios from '../../components/cabecalhoExercicios';

function ExEight(){

    const[temperatura, setTemperatura] = useState(0);
    const[situacaoTemp, setSituacaoTemp] = useState();

    function verSituacao(){
        if (temperatura < 36){
            setSituacaoTemp ("A situação para sua temperatura é Hipotermia");
        }
        else if (temperatura >= 36 && temperatura < 37.6){
            setSituacaoTemp ("A situação para sua temperatura é Normal");
        }
        else if (temperatura >= 37.6 && temperatura < 39.6){
            setSituacaoTemp ("A situação para sua temperatura é Febre");
        }
        else if (temperatura >= 39.6 && temperatura < 41){
            setSituacaoTemp ("A situação para sua temperatura é Febre Alta");
        }
        else if (temperatura >= 41){
            setSituacaoTemp ("A situação para sua temperatura é Hipertermia");
        }
    } //DÚVIDA: Ordem das possibilidades e elemento &&

    return(
        <div className='pagina-EX08'>

            <Cabecalho/>

            <div className="title">
                <CabecalhoExercicios titulo = 'Exercício 08 - Situação por Temperatura'/>
            </div>

            <div className="secao">
                <div className="enunciado">
                    <p><b>Avalie a situação de uma pessoa</b> a partir de sua temperatura conforme a tabela ao lado:</p>
                    <img src="/assets/images/tabTemperatura.png"></img>
                </div>
                
                <div className="execucao">
                    <h4>Temperatura:</h4>
                    <input type='text' value={temperatura} onChange={e=>setTemperatura(e.target.value)}></input>
                    <button onClick={verSituacao}>Executar</button>
                </div>
            </div>
            <h4 className="result">{situacaoTemp}</h4>
        </div>
    )
}

export default ExEight;