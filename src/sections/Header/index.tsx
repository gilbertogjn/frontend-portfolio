import { useState } from "react";
import Menu from "../../components/Menu";
import { HeaderContainer } from "./styles";

import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <HeaderContainer>
      <div className="container">
        <div className="mobile-row">
          <h1 className="logo">Gilberto Garcia</h1>
          <RxHamburgerMenu
            className="menu-icon"
            onClick={() => setToggleMenu(!toggleMenu)}
          />
        </div>
        <Menu className={toggleMenu ? "menu active" : "menu"} />
      </div>
    </HeaderContainer>
  );
};

export default Header;
