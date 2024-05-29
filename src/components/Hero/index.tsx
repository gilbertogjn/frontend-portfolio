import { HeroContainer, HeroImg, HeroInfo } from "./styles";
import profile from "../../images/profile.png";

export const Hero = () => (
  <HeroContainer>
    <div className="container">
      <HeroImg src={profile} />
      <HeroInfo>
        <p className="text_p1">Olá, sou</p>
        <h1>Gilberto Garcia</h1>
        <p className="text_p2">Frontend Developer</p>
        <div></div>
      </HeroInfo>
    </div>
  </HeroContainer>
);
