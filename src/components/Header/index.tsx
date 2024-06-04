import { HeaderContainer } from "./styles";

const Header = () => (
  <HeaderContainer>
    <div className="container">
      <h1 className="logo">Gilberto Garcia</h1>
      <nav>
        <ul>
          <li>Sobre</li>
          <li>Experiência</li>
          <li>Projetos</li>
          <li>Contato</li>
        </ul>
      </nav>
    </div>
  </HeaderContainer>
)

export default Header;
