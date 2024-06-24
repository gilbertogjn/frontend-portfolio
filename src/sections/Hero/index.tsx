import {
  BtnsContainer,
  HeroContainer,
  HeroImg,
  HeroInfo,
  SocialContainer,
} from "./styles";
import profile from "../../images/profile.png";
import Button from "../../components/Button";

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

export const Hero = () => (
  <HeroContainer id="hero">
    <div className="container">
      <HeroImg src={profile} />
      <HeroInfo>
        <p className="text_p1">Olá, sou</p>
        <h1>Gilberto Garcia</h1>
        <p className="text_p2">Frontend Developer</p>
        <BtnsContainer>
          <Button href="/cv-gilberto-garcia.pdf">Baixar Currículo</Button>
          <Button href="#contact" className="contact">
            Entrar em Contato
          </Button>
        </BtnsContainer>
        <SocialContainer>
          <a target="_blank" href="https://www.linkedin.com/in/gilbertogarcia-frontend/">
            <FaLinkedin className="icon" />
          </a>
          <a target="_blank" href="https://github.com/gilbertogjn">
            <FaGithub className="icon" />
          </a>
        </SocialContainer>
      </HeroInfo>
    </div>
  </HeroContainer>
);
