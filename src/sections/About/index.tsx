import Heading from "../../components/Heading";
import { AboutCard, AboutContainer, AboutInfo, CardsContainer } from "./styles";
import profile2 from "../../images/profile2.jpg";

import { PiMedalFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";
import ScrollButton from "../../components/ScrollButton";

const About = () => (
  <AboutContainer id="about">
    <div className="container">
      <Heading title="Sobre" subtitle="Quem sou eu" />
      <AboutInfo>
        <img src={profile2} />
        <div>
          <CardsContainer>
            <AboutCard>
              <PiMedalFill className="icon" />
              <h3>Experiência</h3>
              <p>• 5 anos de experiência como desenvolvedor Wordpress</p>
              <p>• 1 ano de experiência</p>
              <p>Frontend Developer</p>
            </AboutCard>
            <AboutCard>
              <FaUserGraduate className="icon" />
              <h3>Formação</h3>
              <p>• Graduado em Análise e Desenvolvimento de Sistemas</p>
              <p>• Especializado em Frontend Development</p>
            </AboutCard>
          </CardsContainer>
          <p>
            Engenheiro Front-end formado pela EBAC – Escola Britânica de Artes
            Criativas e Tecnologia, com graduação em Análise e Desenvolvimento
            de Sistemas pela Universidade Metodista de São Paulo. Profissional
            com perfil resiliente, organizado e atento aos detalhes. Possuo mais
            de 7 anos de experiência na área de criação para a internet, com
            foco no design de interfaces para web utilizando as mais recentes
            tecnologias do mercado, especialmente React.
          </p>
        </div>
      </AboutInfo>
    </div>
    <ScrollButton anchor="#experience" />
  </AboutContainer>
);

export default About;
