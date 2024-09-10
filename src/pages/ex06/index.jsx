import { useState } from "react";
import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CabecalhoExercicios from '../../components/cabecalhoExercicios';

function ExSix(){

    const[salarioBase, setSalarioBase] = useState(0);
    const[bonusMensal, setBonusMensal] = useState(0);
    const[reaisDesconto, setReaisDesconto] = useState(0);
    const[salarioLiquido, setSalarioLiquido] = useState();

    function novoSalario(){
        return (Number(salarioBase) * Number(bonusMensal)) / 100;
    }

    function salLiq(){
        let liquido = (novoSalario() + Number(salarioBase)) - Number(reaisDesconto);
        setSalarioLiquido (`O valor do salário líquido é de R$${liquido.toFixed(2)}`);
    }

    return(
        <div className='pagina-EX06'>

            <Cabecalho/>

            <div className="title">
                <CabecalhoExercicios titulo = 'Exercício 06 - Cálculo de Salário Líquido'/>
            </div>

            <div className="secao">
                <div className="enunciado">
                    <p><b>Calcule o salário líquido de um funcionário</b> a partir de seu salário base, do bônus mensal em porcentagem e do total de descontos em reais.</p>
                </div>
                <div className="execucao">
                    <h4>Salário Base:</h4>
                    <input type='text' value={salarioBase} onChange={e=>setSalarioBase(e.target.value)}></input>
                    <h4>Porcentagem do Bônus Mensal:</h4>
                    <input type='text' value={bonusMensal} onChange={e=>setBonusMensal(e.target.value)}></input>
                    <h4>Reais de Desconto:</h4>
                    <input type='text' value={reaisDesconto} onChange={e=>setReaisDesconto(e.target.value)}></input>
                    <button onClick={salLiq}>Executar</button>
                </div>
            </div>
            <h4 className="result">{salarioLiquido}</h4>
        </div>
    )
}

export default ExSix;