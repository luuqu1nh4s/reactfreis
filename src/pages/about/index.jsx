import './index.scss';
import Cabecalho from '../../components/cabecalho';
import CabecalhoExercicios from '../../components/cabecalhoExercicios';

function About() {
  return (
    <div className="pagina-Sobre">

      <Cabecalho/>

      <div className="title">
        <CabecalhoExercicios titulo = 'Sobre'/>
      </div>

      <div className="secao">

        <div className="intro">
          <p>Bem-vindo à nossa plataforma de exercícios! Aqui, nosso objetivo é ajudar você a aprimorar suas habilidades em Node.js e lógica de programação de forma prática e envolvente. Acreditamos que a prática constante é essencial para o aprendizado e o aperfeiçoamento em tecnologia. Nossa missão é fornecer um ambiente onde você possa praticar e testar seus conhecimentos em Node.js e lógica de programação, permitindo que você avance no seu próprio ritmo e de acordo com as suas necessidades</p>

          <p>Seja qual for seu nível de experiência, nossa plataforma é o lugar ideal para você crescer e desenvolver suas habilidades. Estamos ansiosos para ver seu progresso e sucesso!</p>
        </div>
        
        <img className='imagem' src='/assets/images/logofrei.png'/>
      </div>
      
    </div>        

    
  );
}
  
export default About;