import { useState } from "react";
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CabecalhoExercicios from '../../components/cabecalhoExercicios';

function ExTen(){

    const[alturaPessoa, setAlturaPessoa] = useState(0);
    const[pesoPessoa, setPesoPessoa] = useState(0);
    const[imcPessoa, setImcPessoa] = useState();
    const[situacaoPeso, setSituacaoPeso] = useState();

    function calcularIMC(){
        let imc = Number(pesoPessoa) / (Number(alturaPessoa) * Number(alturaPessoa));
        setImcPessoa (`O IMC da pessoa é ${imc.toFixed(2)}`);
        
        if (imc < 18.5){
            setSituacaoPeso ("A situação da pessoa é Abaixo do Peso");
        }
        else if (imc == 18.5 || imc <= 24.9){
            setSituacaoPeso ("A situação da pessoa é Peso Normal");
        }
        else if (imc == 25 || imc <= 29.9){
            setSituacaoPeso ("A situação da pessoa é Sobrepeso");
        }
        else if (imc == 30 || imc <= 34.9){
            setSituacaoPeso ("A situação da pessoa é Obesidade Grau I");
        }
        else if (imc == 35 || imc <= 39.9){
            setSituacaoPeso ("A situação da pessoa é Obesidade Grau II");
        }
        else if (imc >= 40){
            setSituacaoPeso ("A situação da pessoa é Obesidade Grau III");
        }
    } //DÚVIDA: Ordem das possibilidades e elemento ||

    return(
        <div className='pagina-EX10'>

            <Cabecalho/>

            <div className="title">
                <CabecalhoExercicios titulo = 'Exercício 10 - Situação por IMC'/>
            </div>

            <div className="secao">
                <div className="enunciado">
                    <p><b>Calcule o IMC de uma pessoa</b> a partir de sua altura e de seu peso e avalie a faixa correspondente a tabela ao lado. Ao final, apresente o  IMC e a situação da pessoa.</p>
                    <img src="/assets/images/tabIMC.png"></img>
                </div>
                <div className="execucao">
                    <h4>Altura da Pessoa:</h4>
                    <input type='text' value={alturaPessoa} onChange={e=>setAlturaPessoa(e.target.value)}></input>
                    <h4>Peso da Pessoa:</h4>
                    <input type='text' value={pesoPessoa} onChange={e=>setPesoPessoa(e.target.value)}></input>
                    <button onClick={calcularIMC}>Executar</button>
                </div>
            </div>
            <h4 className="result">{imcPessoa}</h4>
            <h4 className="result">{situacaoPeso}</h4>
        </div>
    )
}

export default ExTen;