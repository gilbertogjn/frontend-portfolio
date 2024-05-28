import { HeroContainer, HeroImg, HeroInfo } from "./styles";
import profile from "../../images/profile.png";

export const Hero = () => (
  <HeroContainer>
    <div className="container">
      <HeroImg src={profile} />
      <HeroInfo>
        <p>Olá, sou</p>
        <h1>Gilberto Garcia</h1>
        <p>Frontend Developer</p>
        <div></div>
      </HeroInfo>
    </div>
  </HeroContainer>
);
