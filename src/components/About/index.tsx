import Heading from "../Heading";
import { AboutCard, AboutContainer, AboutInfo, CardsContainer } from "./styles";
import profile from "../../images/profile.png";
import { PiMedalFill } from "react-icons/pi";

const About = () => (
  <AboutContainer>
    <div className="container">
      <Heading title="Sobre" subtitle="Quem sou eu" />
      <AboutInfo>
        <img src={profile} />
        <div>
          <CardsContainer>
            <AboutCard>
              <PiMedalFill />
              <h3>Experiência</h3>
              <p>1 ano de experiência</p>
              <p>Frontend Developer</p>
            </AboutCard>
            <AboutCard>
              <PiMedalFill />
              <h3>Experiência</h3>
              <p>1 ano de experiência</p>
              <p>Frontend Developer</p>
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
