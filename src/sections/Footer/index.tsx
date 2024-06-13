import Menu from "../../components/Menu";
import { FooterContainer } from "./styles";

const Footer = () => (
  <FooterContainer>
    <div className="container">
      <Menu />
      <p>Copyright © 2023 Gilberto Garcia. <br /> 
        Todos os direitos reservados.</p>
    </div>
  </FooterContainer>
);

export default Footer;
