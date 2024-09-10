import { useState } from "react";
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CabecalhoExercicios from '../../components/cabecalhoExercicios';

function ExSeven(){

    const[cor1, setCor1] = useState("");
    const[cor2, setCor2] = useState("");
    const[duasCores, setDuasCores] = useState();
    
    function validarCores(){
        let primaria = "Sim";

        if (cor1 == "amarelo" || cor1 == "azul" || cor1 == "vermelho"){
            if (cor2 == "amarelo" || cor2 == "azul" || cor2 == "vermelho"){
                setDuasCores (`As duas cores são primárias? ${primaria}`);
            }
            else{
                primaria = "Não";
                setDuasCores (`As duas cores são primárias? ${primaria}`);
            }
        } //OBSERVAÇÃO: Colocar o nome das cores com inicial maiúscula nos parâmetros
    }

    return(
        <div className='pagina-EX07'>

            <Cabecalho/>

            <div className="title">
                <CabecalhoExercicios titulo = 'Exercício 07 - Cores Primárias'/>
            </div>

            <div className="secao">
                <div className="enunciado">
                    <p>Verifique se <b>duas cores</b> são <b>primárias</b>.</p>
                </div>
                <div className="execucao">
                    <h4>Primeira Cor:</h4>
                    <input type='text' value={cor1} onChange={e=>setCor1(e.target.value)}></input>
                    <h4>Segunda Cor:</h4>
                    <input type='text' value={cor2} onChange={e=>setCor2(e.target.value)}></input>
                    <button onClick={validarCores}>Executar</button>
                </div>
            </div>
            <h4 className="result">{duasCores}</h4>
        </div>
    )
}

export default ExSeven;