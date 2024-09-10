import './index.scss';
import Cabecalho from '../../components/cabecalho';
import Card from '../../components/cards';

function App() {

  let cards = [
    {
      "cardlink": '/ex01',
      "cardcor": 'laranja',
      "titulo": 'Compra com Desconto',
      "subtitulo": 'Exercício 01'
    },

    {
      "cardlink": '/ex02',
      "cardcor": 'roxo',
      "titulo": 'Converter KG/Gramas',
      "subtitulo": 'Exercício 02'
    },

    {
      "cardlink": '/ex03',
      "cardcor": 'verde',
      "titulo": 'Venda de Açaí',
      "subtitulo": 'Exercício 03'
    },

    {
      "cardlink": '/ex04',
      "cardcor": 'azul',
      "titulo": 'Tempo de Leitura',
      "subtitulo": 'Exercício 04'
    },

    {
      "cardlink": '/ex05',
      "cardcor": 'vermelho',
      "titulo": 'Situação de Aluno',
      "subtitulo": 'Exercício 05'
    },

    {
      "cardlink": '/ex06',
      "cardcor": 'amarelo',
      "titulo": 'Cálculo de Salário Líquido',
      "subtitulo": 'Exercício 06'
    },

    {
      "cardlink": '/ex07',
      "cardcor": 'ciano',
      "titulo": 'Cores Primárias',
      "subtitulo": 'Exercício 07'
    },

    {
      "cardlink": '/ex08',
      "cardcor": 'cinza',
      "titulo": 'Situação por Temperatura',
      "subtitulo": 'Exercício 08'
    },

    {
      "cardlink": '/ex09',
      "cardcor": 'marrom',
      "titulo": 'Compra de Sorvete',
      "subtitulo": 'Exercício 09'
    },

    {
      "cardlink": '/ex10',
      "cardcor": 'rosa',
      "titulo": 'Situação por IMC',
      "subtitulo": 'Exercício 10'
    },
    
    {
      "cardlink": '/ex11',
      "cardcor": 'madeira',
      "titulo": 'Tabuada',
      "subtitulo": 'Exercício 11'
    }
  ]

  return (
    <div className='pagina-app'>

      <Cabecalho/>

      <div className="menu">

        <div className="tituloMenu">
          <h1>Escolha um treino...</h1>
        </div>

        <div className="cards">
          {
            cards.map (card =>
              <Card
                cardlink = {card.cardlink}
                cardcor = {card.cardcor}
                titulo = {card.titulo}
                subtitulo = {card.subtitulo}
              />
            )
          }
        </div>

      </div>
      
    </div>
  )
};

export default App;