import { useState } from 'react';
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CabecalhoExercicios from '../../components/cabecalhoExercicios';

function ExFive(){
    
    const[nomeAluno, setNomeAluno] = useState("");
    const[nota1, setNota1] = useState(0);
    const[nota2, setNota2] = useState(0);
    const[nota3, setNota3] = useState(0);
    const[mediaAluno, setMediaAluno] = useState ();
    const[situacaoAluno, setSituacaoAluno] = useState();

    function calcularMedia(){
        let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
        setMediaAluno (`Média do(a) aluno(a) ${nomeAluno}: ${media.toFixed(1)}`);
        
        let situacao = "Sim";

        if (media >= 6){
            setSituacaoAluno (`O aluno passou? ${situacao}`);
        }
        else{
            situacao = "Não"
            setSituacaoAluno (`O aluno passou? ${situacao}`);
        }
    }

    return(
        <div className='pagina-EX05'>

            <Cabecalho/>

            <div className="title">
                <CabecalhoExercicios titulo = 'Exercício 05 - Situação de Aluno'/>
            </div>

            <div className="secao">
                <div className="enunciado">
                    <p><b>Verifique se um aluno passou ou não</b> baseando-se na média de 3 notas, considerando que a média mínima para passar é 6.</p>
                </div>
                <div className="execucao">
                    <h4>Nome do aluno:</h4>
                    <input type='text' value={nomeAluno} onChange={e=>setNomeAluno(e.target.value)}></input>
                    <h4>Nota 1:</h4>
                    <input type='numeric' value={nota1} onChange={e=>setNota1(e.target.value)}></input>
                    <h4>Nota 2:</h4>
                    <input type='numeric' value={nota2} onChange={e=>setNota2(e.target.value)}></input>
                    <h4>Nota 3:</h4>
                    <input type='numeric' value={nota3} onChange={e=>setNota3(e.target.value)}></input>
                    <button onClick={calcularMedia}>Executar</button>
                </div>
            </div>
            <h4 className='result'>{mediaAluno}</h4>
            <h4 className='result'>{situacaoAluno}</h4>
        </div>
    )
}

export default ExFive;