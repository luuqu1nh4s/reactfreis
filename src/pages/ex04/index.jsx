import { useState } from 'react';
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CabecalhoExercicios from '../../components/cabecalhoExercicios';

function ExFour(){

    const[nomePessoa, setNomePessoa] = useState("");
    const[nomeLivro, setNomeLivro] = useState("");
    const[qtdPaginas, setQtdPaginas] = useState(0);
    const[segLeitura, setSegLeitura] = useState(0);
    const[tempoTotal, setTempoTotal] = useState();

    function minLeitura(){
        return (Number(segLeitura) * Number(qtdPaginas)) / 60;
    }

    function horasLeitura(){
        let horas = minLeitura() / 60;
        setTempoTotal (`${nomePessoa} lerá ${nomeLivro} em ${horas.toFixed(2)} horas`);
        //DÚVIDA; Como separar a parte inteira da parte decimal do resultado
    }

    return(
        <div className='pagina-EX04'>

            <Cabecalho/>

            <div className="title">
            <CabecalhoExercicios titulo = 'Exercício 04 - Tempo de Leitura'/>
            </div>

            <div className="secao">
                <div className="enunciado">
                    <p><b>Calcule o tempo que um livro será lido por uma pessoa</b> a partir do nome do livro, da quantidade de páginas e do tempo, em segundos, de leitura por página.</p>
                </div>

                <div className="execucao">
                    <h4>Nome da pessoa:</h4>
                    <input type='text' value={nomePessoa} onChange={e=>setNomePessoa(e.target.value)}></input>
                    <h4>Nome do Livro:</h4>
                    <input type='text' value={nomeLivro} onChange={e=>setNomeLivro(e.target.value)}></input>
                    <h4>Quantidade de Páginas:</h4>
                    <input type='text' value={qtdPaginas} onChange={e=>setQtdPaginas(e.target.value)}></input>
                    <h4>Segundos de leitura por página:</h4>
                    <input type='text' value={segLeitura} onChange={e=>setSegLeitura(e.target.value)}></input>
                    <button onClick={horasLeitura}>Executar</button>
                </div>
            </div>
            <h4 className='result'>{tempoTotal}</h4>
        </div>
    )
}

export default ExFour;