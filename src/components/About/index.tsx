import Heading from "../Heading";
import { AboutCard, AboutContainer, AboutInfo, CardsContainer } from "./styles";
import profile2 from "../../images/profile2.jpg";

import { PiMedalFill } from "react-icons/pi";
import { FaUserGraduate } from "react-icons/fa";

const About = () => (
  <AboutContainer id="about">
    <div className="container">
      <Heading title="Sobre" subtitle="Quem sou eu" />
      <AboutInfo>
        <img src={profile2} />
        <div>
          <CardsContainer>
            <AboutCard>
              <PiMedalFill className="icon"/>
              <h3>Experiência</h3>
              <p>1 ano de experiência</p>
              <p>Frontend Developer</p>
            </AboutCard>
            <AboutCard>
              <FaUserGraduate className="icon"/>
              <h3>Formação</h3>
              <p>Graduado em Análise e Desenvolvimento de Sistemas</p>
              <p>Especialização como Engenheiro Frontend</p>
            </AboutCard>
          </CardsContainer>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic quis
            reprehenderit et laborum, rem, dolore eum quod voluptate
            exercitationem nobis, nihil esse debitis maxime facere minus sint
            delectus velit in eos quo officiis explicabo deleniti dignissimos.
            Eligendi illum libero dolorum cum laboriosam corrupti quidem,
            reiciendis ea magnam? Nulla, impedit fuga!
          </p>
        </div>
      </AboutInfo>
    </div>
  </AboutContainer>
);

export default About;
