import Menu from "../../components/Menu";
import { HeaderContainer } from "./styles";

const Header = () => (
  <HeaderContainer>
    <div className="container">
      <h1 className="logo">Gilberto Garcia</h1>
      <Menu />
    </div>
  </HeaderContainer>
)

export default Header;
